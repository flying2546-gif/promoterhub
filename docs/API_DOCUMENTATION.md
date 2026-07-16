# PromoterHub API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## Endpoints

### 1. Get All Campaigns
```http
GET /campaigns
```

**Query Parameters:**
- `category` (optional): Filter by category ID
- `status` (optional): Filter by status (active, inactive, draft)
- `limit` (optional): Number of results (default: 10)
- `page` (optional): Page number (default: 1)

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Elden Ring",
      "description": "...",
      "category_id": 2,
      "campaign_type": "game",
      "cover_image": "...",
      "cta_link": "...",
      "status": "active"
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 10
}
```

### 2. Create Campaign (Admin)
```http
POST /campaigns
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "name": "Elden Ring",
  "description": "เกม RPG ผจญภัยอีโพคแฟนตาซี",
  "category_id": 2,
  "campaign_type": "game",
  "cover_image": "...",
  "cta_link": "...",
  "cta_text": "Play Now",
  "status": "active"
}
```

### 3. Get Categories
```http
GET /categories
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Action Games",
      "slug": "action-games",
      "icon": "🎮"
    }
  ]
}
```

### 4. Track Interaction
```http
POST /track
```

**Request Body:**
```json
{
  "campaign_id": 1,
  "interaction_type": "click",
  "user_session_id": "...",
  "device_type": "mobile",
  "country": "TH"
}
```

## Error Handling

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "status": 400
}
```

## Rate Limiting

- 100 requests per minute for public endpoints
- 1000 requests per minute for authenticated endpoints

## Authentication

Use JWT token in Authorization header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```
