const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

// Функция для парсинга данных с сайта МЧС
async function parseMCHS() {
  try {
    const response = await axios.get('https://www.gov.kz/memleket/entities/emergency?lang=ru');
    const $ = cheerio.load(response.data);
    const news = [];

    // Ищем новости или предупреждения
    $('.news-item, .announcement, .alert').each((index, element) => {
      const title = $(element).find('.title, h3, h4, .news-title').text().trim();
      const content = $(element).find('.content, .text, p').text().trim();
      const link = $(element).find('a').attr('href');

      if ((title && title.toLowerCase().includes('паводок')) ||
          (content && content.toLowerCase().includes('паводок'))) {
        news.push({
          title: title || 'Предупреждение о паводке',
          content: content ? content.substring(0, 200) + '...' : '',
          link: link ? (link.startsWith('http') ? link : `https://www.gov.kz${link}`) : '',
          source: 'МЧС РК',
          date: new Date().toLocaleDateString('ru-RU')
        });
      }
    });

    return news;
  } catch (error) {
    console.error('Error parsing MCHS:', error);
    return [];
  }
}

// Функция для получения данных из метеобазы Kazhydromet
async function getKazhydrometWeatherData() {
  try {
    // Возвращаем пустые данные пока, чтобы избежать ошибок
    return { cities: [], regions: [] };
  } catch (error) {
    console.error('Error getting Kazhydromet weather data:', error);
    return { cities: [], regions: [] };
  }
}

app.get('/api/flood-data', async (req, res) => {
  try {
    // Возвращаем mock данные для тестирования
    const combinedData = {
      mchs: [{
        title: 'Предупреждение о возможных паводках',
        content: 'В связи с таянием снега и ожидаемыми осадками возможно повышение уровня воды в реках.',
        link: 'https://www.gov.kz/memleket/entities/emergency',
        source: 'МЧС РК',
        date: new Date().toLocaleDateString('ru-RU')
      }],
      kazhydromet: [{
        region: 'Северный Казахстан',
        forecast: 'Ожидаются осадки, возможны локальные подтопления.',
        source: 'Казгидромет',
        date: new Date().toLocaleDateString('ru-RU')
      }],
      liveWeather: { cities: [], regions: [] },
      lastUpdated: new Date().toISOString()
    };

    res.json(combinedData);
  } catch (error) {
    console.error('Error in /api/flood-data:', error);
    res.status(500).json({
      error: 'Failed to fetch flood data',
      mchs: [],
      kazhydromet: [],
      liveWeather: { cities: [], regions: [] },
      lastUpdated: new Date().toISOString()
    });
  }
});

app.listen(PORT, () => {
  console.log(`Flood data API server running on port ${PORT}`);
});