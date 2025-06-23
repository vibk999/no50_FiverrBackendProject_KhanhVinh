# app/Dockerfile

FROM node:22.9.0-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm install --timeout=300000

COPY . .

# ✅ Tạo Prisma Client sau khi copy code
RUN npx prisma generate

# (Tùy chọn) Migrate DB nếu muốn: 
# RUN npx prisma migrate deploy

EXPOSE 3069

CMD ["npm", "run", "start"]