import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import fs from 'fs';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}/cv-render`;

const CV_DIR = path.resolve(__dirname, '../public/cvs');
if (!fs.existsSync(CV_DIR)) {
  fs.mkdirSync(CV_DIR, { recursive: true });
}

function checkServer() {
  return new Promise((resolve) => {
    const request = http.get(`${BASE_URL}?lang=ca`, (res) => {
      resolve(res.statusCode === 200);
    });
    request.on('error', () => resolve(false));
    request.end();
  });
}

function startServer() {
  console.log('⏳ El servidor no està actiu. Iniciant `npm run dev`...');
  return new Promise((resolve, reject) => {
    const server = spawn('npm', ['run', 'dev'], { shell: true, stdio: 'ignore' });
    
    // Esperar fins que el servidor respongui
    const interval = setInterval(async () => {
      const isUp = await checkServer();
      if (isUp) {
        clearInterval(interval);
        console.log('🚀 Servidor detectat!');
        resolve(server);
      }
    }, 2000);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Timeout esperant el servidor.'));
    }, 60000);
  });
}

async function generateCVForLanguage(browser, lang) {
  const url = `${BASE_URL}?lang=${lang}`;
  const fileName = `cv_${lang}.pdf`;
  const outputPath = path.join(CV_DIR, fileName);

  console.log(`📡 Generant CV PÚBLIC en [${lang.toUpperCase()}] des de ${url}...`);
  
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('h1', { timeout: 10000 });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });

    console.log(`✅ CV PÚBLIC [${lang.toUpperCase()}] generat a: ${outputPath}`);
    await page.close();
  } catch (error) {
    console.error(`❌ Error generant CV PÚBLIC [${lang}]:`, error.message);
  }
}

async function generateAllCVs() {
  console.log('🚀 Iniciant generació de CVs PÚBLICS...');

  let serverProcess = null;
  const isServerUp = await checkServer();
  
  try {
    if (!isServerUp) {
      serverProcess = await startServer();
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const languages = ['ca', 'en', 'es'];

    for (const lang of languages) {
      await generateCVForLanguage(browser, lang);
    }
    
    console.log('\n✨ Tots els CVs PÚBLICS s\'han generat i sobreescrit correctament!');
    await browser.close();
  } catch (error) {
    console.error('❌ Error general:', error.message);
  } finally {
    if (serverProcess) {
      console.log('🛑 Aturant el servidor temporal...');
      serverProcess.kill();
      // En Windows Next.js sol deixar processos fills, però spawn amb shell true pot necessitar taskkill
      if (process.platform === 'win32') {
        spawn('taskkill', ['/pid', serverProcess.pid, '/f', '/t']);
      }
    }
    process.exit(0);
  }
}

generateAllCVs();
