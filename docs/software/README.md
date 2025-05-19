# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення бази даних

```sql

CREATE TABLE Profile
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(45)  NOT NULL,
    last_name  VARCHAR(45)  NOT NULL,
    email      VARCHAR(255) NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL
);

CREATE TABLE MediaContent
(
    id           SERIAL PRIMARY KEY,
    title        VARCHAR(100) NOT NULL,
    description  TEXT,
    body         TEXT         NOT NULL,
    content_type VARCHAR(45)  NOT NULL,
    created_at   DATE DEFAULT CURRENT_DATE,
    profile_id   INT          NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Role
(
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(45) NOT NULL,
    description VARCHAR(45) NOT NULL
);

CREATE TABLE Permission
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE RolePermission
(
    role_id       INT NOT NULL,
    permission_id INT NOT NULL,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES Role (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES Permission (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE AnalysisReport
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(45)  NOT NULL,
    body       VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    profile_id INT          NOT NULL,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE AnalysisResult
(
    id                SERIAL PRIMARY KEY,
    title             VARCHAR(45)  NOT NULL,
    description       VARCHAR(255),
    body              VARCHAR(255) NOT NULL,
    created_at        DATE DEFAULT CURRENT_DATE,
    analysisReport_id INT          NOT NULL,
    profile_id        INT          NOT NULL,
    FOREIGN KEY (analysisReport_id) REFERENCES AnalysisReport (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentAnalysisResult
(
    mediaContent_id   INT NOT NULL,
    analysisResult_id INT NOT NULL,
    PRIMARY KEY (mediaContent_id, analysisResult_id),
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (analysisResult_id) REFERENCES AnalysisResult (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Tag
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE AnalysisResultTag
(
    analysisResult_id INT NOT NULL,
    tag_id            INT NOT NULL,
    PRIMARY KEY (analysisResult_id, tag_id),
    FOREIGN KEY (analysisResult_id) REFERENCES AnalysisResult (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Source
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(45)  NOT NULL,
    url  VARCHAR(255) NOT NULL
);

CREATE TABLE SourceTag
(
    tag_id    INT NOT NULL,
    source_id INT NOT NULL,
    PRIMARY KEY (tag_id, source_id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (source_id) REFERENCES Source (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentTag
(
    tag_id          INT NOT NULL,
    mediaContent_id INT NOT NULL,
    PRIMARY KEY (tag_id, mediaContent_id),
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE MediaContentSource
(
    source_id       INT NOT NULL,
    mediaContent_id INT NOT NULL,
    PRIMARY KEY (source_id, mediaContent_id),
    FOREIGN KEY (source_id) REFERENCES Source (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (mediaContent_id) REFERENCES MediaContent (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE UserRole
(
    profile_id INT NOT NULL,
    role_id    INT NOT NULL,
    PRIMARY KEY (profile_id, role_id),
    FOREIGN KEY (profile_id) REFERENCES Profile (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES Role (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE AnalysisReportTag
(
    analysisReport_id INT NOT NULL,
    tag_id            INT NOT NULL,
    PRIMARY KEY (analysisReport_id, tag_id),
    FOREIGN KEY (analysisReport_id) REFERENCES AnalysisReport (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES Tag (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Profile (id, first_name, last_name, email, password)
VALUES (1, 'Lea', 'Seydoux', 'lea.seydoux@example.com', 'bestever!'),
       (2, 'Emily', 'Nguyen', 'emily.n@example.org', 'emNg@2023'),
       (3, 'Carlos', 'Ramos', 'carlos.ramos@mail.com', 'r@mos918'),
       (4, 'Aisha', 'Singh', 'aisha_singh@domain.com', 'aish@1020'),
       (5, 'Henry', 'Kim', 'henry.kim@abc.com', 'hkim8823'),
       (6, 'Maria', 'Ivanova', 'maria.ivanova@mail.ru', 'miV1234'),
       (7, 'Liam', 'Wong', 'liam.wong@site.net', 'wongpass99'),
       (8, 'Sophia', 'Berg', 'sophia.berg@email.com', 'berG4321'),
       (9, 'Noah', 'Schmidt', 'noah.schmidt@example.net', 'nSchm890'),
       (10, 'Isabella', 'Ricci', 'isa.ricci@provider.org', 'isRicci_77');

INSERT INTO Role (id, name, description)
VALUES (1, 'Viewer', 'Basic access for content viewing'),
       (2, 'Analyst', 'Has permission to analyze and moderate content');

INSERT INTO Permission (id, name)
VALUES (1, 'access.reports'),
       (2, 'user.suspend'),
       (3, 'media.upload'),
       (4, 'media.search'),
       (5, 'media.edit'),
       (6, 'media.remove');

INSERT INTO Tag (id, name)
VALUES (1, 'Biology'),
       (2, 'AI & Robotics'),
       (3, 'Nutrition'),
       (4, 'Adventure'),
       (5, 'Climate'),
       (6, 'Astrophysics'),
       (7, 'Blockchain'),
       (8, 'Green Tech'),
       (9, 'eSports'),
       (10, 'Pharmaceuticals'),
       (11, 'Trend Analysis'),
       (12, 'User Sentiment'),
       (13, 'New Product'),
       (14, 'Sales Trends'),
       (15, 'Team Feedback'),
       (16, 'Influencer Reach'),
       (17, 'Competitive Review'),
       (18, 'Fleet Management'),
       (19, 'UX Research');

INSERT INTO Source (id, name, url)
VALUES (1, 'BBC Earth', 'https://www.bbcearth.com'),
       (2, 'Wired', 'https://www.wired.com'),
       (3, 'ESA', 'https://www.esa.int'),
       (4, 'WebMD', 'https://www.webmd.com'),
       (5, 'Scientific American', 'https://www.scientificamerican.com'),
       (6, 'Lonely Planet', 'https://www.lonelyplanet.com'),
       (7, 'Vimeo', 'https://vimeo.com'),
       (8, 'IGN', 'https://www.ign.com'),
       (9, 'Xbox Wire', 'https://news.xbox.com'),
       (10, 'HealthTech Weekly', 'https://www.healthtechweekly.com');

INSERT INTO MediaContent (id, title, description, body, content_type, created_at, profile_id)
VALUES (1, 'Deep Sea Creatures', 'Rare and fascinating sea animals in their natural habitat.',
        'Exploration of marine biodiversity in deep-sea ecosystems.', 'Article', '2024-11-01', 1),
       (2, 'Rise of Generative AI', 'How generative models are reshaping the future.',
        'Breakthroughs in text and image generation using AI.', 'Article', '2024-11-02', 2),
       (3, 'Journey to Saturn', 'ESAs latest mission beyond Jupiter.', 'https://youtu.be/saturn-exploration', 'Video',
        '2024-11-03', 3),
       (4, 'Balanced Diet 101', 'Everyday tips for a healthier diet.',
        'https://www.webmd.com/healthy-eating/guide/default.htm', 'Blog Post', '2024-11-04', 4),
       (5, 'What is Blockchain?', 'Explaining distributed ledger tech in simple terms.',
        'Blockchain could redefine data security and verification.', 'Article', '2024-11-05', 5),
       (6, 'Best Hidden Islands to Visit', 'Underrated travel spots away from the crowds.',
        'https://www.lonelyplanet.com/hidden-islands', 'Blog Post', '2024-12-06', 6),
       (7, 'Future of Solar Tech', 'Innovations in photovoltaic energy.', 'https://vimeo.com/future-solar', 'Video',
        '2024-12-07', 7),
       (8, 'Futuristic Metropolis Art', 'Concept art of neon-soaked future cities.',
        'https://www.ign.com/images/futurecity.jpg', 'Image', '2024-12-08', 8),
       (9, 'Frozen Combat Scene', 'Warrior duels monster atop icy cliff.',
        'https://news.xbox.com/images/fight_scene.jpeg', 'Image', '2024-12-09', 9),
       (10, 'Telemedicine Expansion', 'How tech is bridging healthcare gaps.',
        'Digital health tools are transforming care delivery.', 'Article', '2024-12-10', 10);

INSERT INTO AnalysisReport (id, title, body, created_at, profile_id)
VALUES (1, 'Energy Consumption Review', 'Detailed breakdown of energy usage across departments.', '2024-01-01', 1),
       (2, 'Emerging Tech Forecast', 'Predictions and implications of new technology trends.', '2024-01-02', 2),
       (3, 'User Experience Audit', 'Evaluation of UX design across major customer touchpoints.', '2024-01-03', 1),
       (4, 'Sales Funnel Optimization', 'Insights into conversion rates and funnel drop-offs.', '2024-01-04', 3),
       (5, 'Q4 Revenue Projection', 'Projected earnings based on updated financial inputs.', '2024-01-05', 2),
       (6, 'Remote Work Assessment', 'Review of employee productivity in remote environments.', '2024-01-06', 4),
       (7, 'Influencer Campaign Metrics', 'Performance metrics from recent influencer collaborations.', '2024-01-07',
        1),
       (8, 'Product Comparison Study', 'Side-by-side evaluation of feature sets and pricing.', '2024-01-08', 3),
       (9, 'Logistics Process Review', 'Inspection of delivery timelines and carrier efficiency.', '2024-01-09', 4),
       (10, 'Digital Engagement Report', 'Analysis of user interactions across digital platforms.', '2024-01-10', 2);

INSERT INTO RolePermission (role_id, permission_id)
VALUES (2, 1),
       (2, 2),
       (1, 3),
       (2, 3),
       (1, 4),
       (2, 4),
       (1, 5),
       (2, 5),
       (1, 6),
       (2, 6);

INSERT INTO UserRole (profile_id, role_id)
VALUES (1, 1),
       (1, 2),
       (2, 2),
       (3, 1),
       (3, 2),
       (4, 1),
       (5, 2),
       (6, 1),
       (7, 2),
       (8, 1),
       (8, 2);

INSERT INTO AnalysisResult (id, title, description, body, created_at, analysisReport_id, profile_id)
VALUES (1, 'Energy Efficiency Metrics', 'Key insights into departmental energy usage.',
        'The report outlines major inefficiencies and improvement areas.', '2024-02-01', 1, 1),
       (2, 'Tech Disruption Impact', 'Exploration of tech trends affecting our sector.',
        'Analysis covers disruption risks and opportunities.', '2024-02-02', 2, 2),
       (3, 'UX Improvement Areas', 'Identified friction points in the user journey.',
        'Recommendations for enhancing user satisfaction.', '2024-02-03', 3, 1),
       (4, 'Conversion Rate Patterns', 'Insights into sales funnel behavior.',
        'Identifies drop-off points and engagement gaps.', '2024-02-04', 4, 3),
       (5, 'Revenue Trends Summary', 'Forecast and actuals comparison for Q4.',
        'Discusses variance and underlying revenue patterns.', '2024-02-05', 5, 2),
       (6, 'Remote Workflow Insights', 'Challenges and benefits of remote operations.',
        'Data suggests new norms in communication and output.', '2024-02-06', 6, 4),
       (7, 'Influencer ROI Review', 'Return on investment from influencer campaigns.',
        'Analysis includes reach, clicks, and conversions.', '2024-02-07', 7, 1),
       (8, 'Feature Competitiveness Score', 'Assessment of key product features vs competitors.',
        'Shows relative strengths and market gaps.', '2024-02-08', 8, 3),
       (9, 'Shipment Performance Report', 'Efficiency and delay analysis in order fulfillment.',
        'Findings indicate improvement in 2-day delivery rates.', '2024-02-09', 9, 4),
       (10, 'Digital Pathway Evaluation', 'User actions across marketing funnels.',
        'Breakdown of entry points, drop-offs, and conversions.', '2024-02-10', 10, 2);

INSERT INTO MediaContentAnalysisResult (mediaContent_id, analysisResult_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10),
       (1, 2),
       (2, 3),
       (3, 4),
       (4, 5),
       (5, 6),
       (6, 7),
       (7, 8),
       (8, 9),
       (9, 10),
       (10, 1);


INSERT INTO MediaContentSource (source_id, mediaContent_id)
VALUES (1, 1),
       (1, 10),
       (2, 2),
       (2, 9),
       (3, 3),
       (3, 8),
       (4, 4),
       (4, 7),
       (5, 5),
       (5, 6),
       (6, 6),
       (6, 5),
       (7, 7),
       (7, 4),
       (8, 8),
       (8, 3),
       (9, 9),
       (9, 2),
       (10, 10),
       (10, 1);

INSERT INTO AnalysisResultTag (analysisResult_id, tag_id)
VALUES (1, 1),
       (1, 11),
       (2, 5),
       (2, 11),
       (3, 12),
       (4, 13),
       (5, 14),
       (6, 3),
       (6, 15),
       (7, 16),
       (8, 17),
       (9, 18),
       (10, 2),
       (10, 19);

INSERT INTO AnalysisReportTag (analysisReport_id, tag_id)
VALUES (1, 2),
       (2, 2),
       (3, 3),
       (4, 2),
       (5, 8),
       (6, 3),
       (7, 2),
       (8, 1),
       (9, 8),
       (10, 2);

INSERT INTO MediaContentTag (tag_id, mediaContent_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 5),
       (1, 7),
       (1, 10),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (2, 7),
       (2, 10),
       (3, 4),
       (3, 10),
       (4, 6),
       (5, 1),
       (5, 7),
       (6, 3),
       (7, 5),
       (8, 7),
       (9, 8),
       (9, 9),
       (10, 4),
       (10, 10);

INSERT INTO SourceTag (tag_id, source_id)
VALUES (1, 1),
       (1, 3),
       (1, 4),
       (1, 10),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (2, 10),
       (3, 4),
       (3, 10),
       (4, 1),
       (4, 6),
       (5, 1),
       (6, 1),
       (6, 3),
       (7, 2),
       (7, 5),
       (8, 1),
       (9, 8),
       (9, 9),
       (10, 4),
       (10, 10);
```

## RESTfull сервіс для управління даними

### Підключення до бази даних
```js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const db = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

export default db;
```

### App модуль та сервер
```js
import express from 'express';
import userRouter from '../routers/userRouter.js';
import mediaContentRouter from '../routers/mediaContentRouter.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', mediaContentRouter);

app.use(errorHandler);

export default app;
```

```js
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

const start = () => {
  app.listen(port, () => console.log(`Server started on port ${port}`));
};
start();
```

### Маршрути для User та MediaContent
```js
import express from 'express';
import {
  registerUser,
  listUsers,
  getUser,
  updateUser,
  removeUser,
} from '../controllers/userController.js.js';

const userRouter = new express.Router();

userRouter.post('/user', registerUser);
userRouter.get('/user', listUsers);
userRouter.get('/user/:id', getUser);
userRouter.patch('/user/:id', updateUser);
userRouter.delete('/user/:id', removeUser);

export default userRouter;
```

```js
import express from 'express';
import {
  createMediaContent,
  getMediaContents,
  getMediaContent,
  updateMediaContent,
  deleteMediaContent,
} from '../controllers/mediaContentController.js';

const mediaContentRouter = new express.Router();

mediaContentRouter.post('/content', createMediaContent);
mediaContentRouter.get('/content', getMediaContents);
mediaContentRouter.get('/content/:id', getMediaContent);
mediaContentRouter.patch('/content/:id', updateMediaContent);
mediaContentRouter.delete('/content/:id', deleteMediaContent);

export default mediaContentRouter;
```

### Контролери для User
```js
import {
  createProfile,
  fetchAllProfiles,
  findUserById,
  updateProfileById,
  deleteProfileById,
  findUserByEmail,
} from '../models/userModel.js';
import AppError from '../utils/appError.js';
import handleAsync from '../utils/handleAsync.js';
import { validateRequiredFields } from '../utils/validator.js';

export const registerUser = handleAsync(async (req, res) => {
  const userData = req.body;

  validateRequiredFields(userData);

  const user = await findUserByEmail(userData.email);
  if (user) {
    throw new AppError('AlreadyRegisteredException', 400);
  }

  await createProfile(userData);
  res
    .status(201)
    .json({ status: 'success', message: 'User registered successfully' });
});

export const listUsers = handleAsync(async (req, res) => {
  const users = await fetchAllProfiles();
  res.status(200).json({ status: 'success', message: users });
});

export const getUser = handleAsync(async (req, res) => {
  const { id } = req.params;
  const user = await findUserById(id);

  if (!user) {
    throw new AppError('UserNotFoundException', 404);
  }

  res.status(200).json({ status: 'success', message: user });
});

export const updateUser = handleAsync(async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  const user = await findUserById(id);

  if (!user) {
    throw new AppError('UserNotFoundException', 404);
  }

  const updatedUser = await updateProfileById(id, userData);

  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    updatedUser,
  });
});

export const removeUser = handleAsync(async (req, res) => {
  const { id } = req.params;

  const user = await findUserById(id);

  if (!user) {
    throw new AppError('UserNotFoundException', 404);
  }

  await deleteProfileById(id);

  res.status(200).json({ message: 'User deleted successfully' });
});
```

### Взаємодія з базою даних для User
```js
import db from '../config/db.js';

export const createProfile = async (userData) => {
  const { first_name, last_name, email, password } = userData;
  const query = `INSERT INTO Profile (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)`;
  return await db.query(query, [first_name, last_name, email, password]);
};

export const fetchAllProfiles = async () => {
  const query = `SELECT * FROM Profile`;
  const result = await db.query(query);
  return result.rows;
};

export const findUserById = async (id) => {
  const query = `SELECT * FROM Profile WHERE id = $1`;
  const result = await db.query(query, [id]);
  return result.rows[0];
};

export const updateProfileById = async (id, userData) => {
  const fields = Object.keys(userData);
  const values = Object.values(userData);

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(', ');

  const query = `
        UPDATE Profile
        SET ${setClause}
        WHERE id = $${fields.length + 1}
    RETURNING *;
  `;

  const result = await db.query(query, [...values, id]);
  return result.rows[0];
};

export const deleteProfileById = async (id) => {
  const query = `DELETE FROM profile WHERE id = $1`;
  await db.query(query, [id]);
};

export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM Profile WHERE email = $1`;
  const result = await db.query(query, [email]);
  return result.rows[0];
};
```

### Контролери для MediaContent
```js
import handleAsync from '../utils/handleAsync.js';
import {
  deleteMediaContentById,
  getAllMediaContents,
  getMediaContentById,
  insertMediaContent,
  updateMediaContentById,
} from '../models/mediaContentModel.js';
import { validateRequiredContentFields } from '../utils/validator.js';
import AppError from '../utils/appError.js';

export const createMediaContent = handleAsync(async (req, res) => {
  const mediaContentData = req.body;

  validateRequiredContentFields(mediaContentData);

  await insertMediaContent(mediaContentData);

  res.status(200).json({ status: 'success', message: mediaContentData });
});

export const getMediaContents = handleAsync(async (req, res) => {
  const mediaContents = await getAllMediaContents();
  res.status(200).json({ status: 'success', message: mediaContents });
});

export const getMediaContent = handleAsync(async (req, res) => {
  const { id } = req.params;
  const mediaContent = await getMediaContentById(id);

  if (!mediaContent) {
    throw new AppError('MediaContentNotFoundException', 404);
  }

  res.status(200).json({ status: 'success', message: mediaContent });
});

export const updateMediaContent = handleAsync(async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  const mediaContent = await getMediaContentById(id);

  if (!mediaContent) {
    throw new AppError('MediaContentNotFoundException', 404);
  }

  const updatedMediaContent = await updateMediaContentById(id, userData);
  res.status(200).json({ status: 'success', message: updatedMediaContent });
});

export const deleteMediaContent = handleAsync(async (req, res) => {
  const { id } = req.params;

  const deletedMediaContent = await deleteMediaContentById(id);

  if (!deletedMediaContent) {
    throw new AppError('MediaContentNotFoundException', 404);
  }

  res
    .status(200)
    .json({ status: 'success', message: 'Media Content Deleted Successfully' });
});
```

### Взаємодія з базою даних для MediaContent
```js
import db from '../config/db.js';
import AppError from '../utils/appError.js';

export const insertMediaContent = async (contentData) => {
  const query = `
    INSERT INTO MediaContent (title, description, body, content_type, profile_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [
    contentData.title,
    contentData.description,
    contentData.body,
    contentData.content_type,
    contentData.user_id,
  ];
  const result = await db.query(query, values);
  return result.rows[0];
};

export const getAllMediaContents = async () => {
  const query = `SELECT * FROM MediaContent`;
  const result = await db.query(query);
  return result.rows;
};

export const getMediaContentById = async (id) => {
  const query = `SELECT * FROM MediaContent WHERE id = $1`;
  const result = await db.query(query, [id]);
  return result.rows[0] || null;
};

export const updateMediaContentById = async (id, contentData) => {
  const fields = Object.keys(contentData);
  const values = Object.values(contentData);

  if (!fields.length) {
    throw new AppError('NoFieldsToUpdateException', 400);
  }

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(', ');
  const query = `
      UPDATE MediaContent
      SET ${setClause}
      WHERE id = $${fields.length + 1}
    RETURNING *;
  `;

  const result = await db.query(query, [...values, id]);
  return result.rows[0];
};

export const deleteMediaContentById = async (id) => {
  const query = `DELETE FROM MediaContent WHERE id = $1 RETURNING *`;
  const result = await db.query(query, [id]);
  return result.rows[0] || null;
};
```

### Контролери для AnalysisReport
```js
import handleAsync from '../utils/handleAsync.js';
import {
  getAllReports,
  getReportById,
  createReport,
  updateReportById,
  deleteReportById,
} from '../models/reportModel.js';
import AppError from '../utils/appError.js';

export const getReports = handleAsync(async (req, res) => {
  const reports = await getAllReports();
  res.status(200).json({ status: 'success', data: reports });
});

export const getReport = handleAsync(async (req, res) => {
  const report = await getReportById(req.params.id);
  if (!report) throw new AppError('Report not found', 404);
  res.status(200).json({ status: 'success', data: report });
});

export const createNewReport = handleAsync(async (req, res) => {
  const newReport = await createReport(req.body);
  res.status(201).json({ status: 'success', data: newReport });
});

export const updateReport = handleAsync(async (req, res) => {
  const updated = await updateReportById(req.params.id, req.body);
  res.status(200).json({ status: 'success', data: updated });
});

export const deleteReport = handleAsync(async (req, res) => {
  await deleteReportById(req.params.id);
  res.status(200).json({ status: 'success', message: 'Deleted' });
});

```

### Роутер для AnalysisReport
```js
import express from 'express';
import {
  getReports,
  getReport,
  createNewReport,
  updateReport,
  deleteReport,
} from '../controllers/reportController.js';

const reportRouter = express.Router();

reportRouter.get('/reports', getReports);
reportRouter.get('/reports/:id', getReport);
reportRouter.post('/reports', createNewReport);
reportRouter.patch('/reports/:id', updateReport);
reportRouter.delete('/reports/:id', deleteReport);

export default reportRouter;
```

### Взаємодія з базою даних для AnalysisReport
```js
import db from '../config/db.js';

export const getAllReports = async () => {
  const res = await db.query('SELECT * FROM AnalysisReport');
  return res.rows;
};

export const getReportById = async (id) => {
  const res = await db.query('SELECT * FROM AnalysisReport WHERE id = $1', [id]);
  return res.rows[0];
};

export const createReport = async ({ title, body, profile_id }) => {
  const res = await db.query(
    `INSERT INTO AnalysisReport (title, body, profile_id) VALUES ($1, $2, $3) RETURNING *`,
    [title, body, profile_id]
  );
  return res.rows[0];
};

export const updateReportById = async (id, data) => {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const setClause = fields.map((f, i) => `${f} = $${i + 1}`).join(', ');
  const res = await db.query(
    `UPDATE AnalysisReport SET ${setClause} WHERE id = $${fields.length + 1} RETURNING *`,
    [...values, id]
  );
  return res.rows[0];
};

export const deleteReportById = async (id) => {
  const res = await db.query('DELETE FROM AnalysisReport WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
```

### Мідлвар для обробки помилок
```js
const errorHandler = (err, req, res, next) => {
  console.error(err);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({ status: err.status, message: err.message });
};

export default errorHandler;
```

### Обгортка над функціями для перенаправлення помилок
```js
const handleAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default handleAsync;
```

### Валідатори для перевірки вхідних даних
```js
import AppError from './appError.js';

export const validateRequiredFields = (data) => {
  const { first_name, last_name, email, password } = data;
  if (!first_name || !last_name || !email || !password) {
    throw new AppError('DataMissingException', 400);
  }
};

export const validateRequiredContentFields = (data) => {
  const { title, body, content_type, user_id } = data;

  if (!title || !body || !content_type || !user_id) {
    throw new AppError('RequiredFieldsMissingException', 400);
  }
};
```

### Модифікований клас помилки
```js
export default class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}
```