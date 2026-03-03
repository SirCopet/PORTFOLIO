import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get current date in ddmmyyyy format
const now = new Date();
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();
const dateStr = `${day}${month}${year}`;

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}/cv-render`;

// Ensure private/cvs directory exists
const CV_DIR = path.resolve(__dirname, '../private/cvs');
if (!fs.existsSync(CV_DIR)) {
  fs.mkdirSync(CV_DIR, { recursive: true });
}

/**
 * Checks if the development server is running
 */
function checkServer() {
  return new Promise((resolve) => {
    const request = http.get(`${BASE_URL}?lang=ca`, (res) => {
      resolve(res.statusCode === 200);
    });
    request.on('error', () => resolve(false));
    request.end();
  });
}

async function generateCVForLanguage(browser, lang) {
  const url = `${BASE_URL}?lang=${lang}`;
  const fileName = `cv_marti_copete_${lang}_${dateStr}.pdf`;
  const outputPath = path.join(CV_DIR, fileName);

  console.log(`📡 Generant CV en [${lang.toUpperCase()}] des de ${url}...`);
  
  try {
    const page = await browser.newPage();
    
    // Augmentem el timeout i esperem a que la xarxa estigui inactiva
    await page.goto(url, { 
      waitUntil: 'networkidle0', 
      timeout: 60000 
    });

    // Esperem a que el contingut principal estigui carregat (el títol H1 amb el nom)
    await page.waitForSelector('h1', { timeout: 10000 });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
      margin: { 
        top: '0', 
        right: '0', 
        bottom: '0', 
        left: '0' 
      },
    });

    console.log(`✅ CV [${lang.toUpperCase()}] generat a: ${outputPath}`);
    await page.close();
  } catch (error) {
    console.error(`❌ Error generant CV [${lang}]:`, error.message);
  }
}

async function generateAllCVs() {
  console.log('🚀 Iniciant generació multilingüe de CVs...');

  // 1. Verificar si el servidor està actiu
  const isServerUp = await checkServer();
  if (!isServerUp) {
    console.error(`❌ ERROR: El servidor no està actiu a ${BASE_URL}`);
    console.error(`👉 Si us plau, executa 'npm run dev' en una altra terminal abans de generar els CVs.`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const languages = ['ca', 'en', 'es'];

  try {
    for (const lang of languages) {
      await generateCVForLanguage(browser, lang);
    }
    console.log('\n✨ Tots els CVs s\'han generat correctament!');
  } catch (error) {
    console.error('❌ Error general:', error.message);
  } finally {
    await browser.close();
  }
}

generateAllCVs();
