-- PromoterHub Database Schema

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(255),
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Campaigns Table
CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category_id INT NOT NULL,
  campaign_type ENUM('game', 'general') NOT NULL DEFAULT 'general',
  cover_image VARCHAR(500),
  cta_link VARCHAR(500) NOT NULL,
  cta_text VARCHAR(100) DEFAULT 'Go to Site',
  status ENUM('active', 'inactive', 'draft') DEFAULT 'draft',
  priority INT DEFAULT 0,
  start_date DATETIME,
  end_date DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Promotions Table (Special Deals & Coupons)
CREATE TABLE promotions (
  id SERIAL PRIMARY KEY,
  campaign_id INT NOT NULL,
  promo_code VARCHAR(50),
  discount_type ENUM('percentage', 'fixed') DEFAULT 'percentage',
  discount_value DECIMAL(10, 2),
  description TEXT,
  max_uses INT,
  current_uses INT DEFAULT 0,
  expires_at DATETIME,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
);

-- User Interactions Table
CREATE TABLE user_interactions (
  id SERIAL PRIMARY KEY,
  campaign_id INT NOT NULL,
  interaction_type ENUM('view', 'click', 'share') DEFAULT 'click',
  user_session_id VARCHAR(255),
  user_ip VARCHAR(45),
  user_agent TEXT,
  referrer VARCHAR(500),
  device_type ENUM('desktop', 'mobile', 'tablet') DEFAULT 'desktop',
  country VARCHAR(2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE,
  INDEX idx_campaign_id (campaign_id),
  INDEX idx_created_at (created_at)
);

-- Admin Users Table
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('admin', 'editor', 'viewer') DEFAULT 'editor',
  is_active BOOLEAN DEFAULT TRUE,
  last_login DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Default Categories
INSERT INTO categories (name, slug, description, display_order) VALUES
('Action Games', 'action-games', 'เกมแอคชั่นที่ระเบิดไปเต็ม', 1),
('RPG Games', 'rpg-games', 'เกม RPG ผจญภัยมหัศจรรย์', 2),
('Strategy Games', 'strategy-games', 'เกมกลยุทธ์ท้าทายสติ', 3),
('Shopping', 'shopping', 'ช้อปปิ้งออนไลน์ยอดนิยม', 4),
('Food & Beverage', 'food-beverage', 'ร้านอาหารและเครื่องดื่ม', 5),
('Services', 'services', 'บริการทั่วไป', 6),
('Trending', 'trending', 'กำลังเป็นที่นิยม', 0);