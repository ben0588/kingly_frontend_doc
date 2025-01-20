---
title: 规格书
sidebar_position: 4
---

# 规格书

## 前端使用技术

- next： ~14.2.2
- react： ~18
- tailwindcss： ^3.4.1
- react-hook-form： ^7.51.4
- swr： ^2.2.5
- sweetalert2： ^11.12.2
- swiper： ^11.1.1
- eslint： ^8.57.0
- jest： ^29.7.0
- cypress： ^13.14.0
- sonar-qube

## 建议主机服务器规格

- 测试服务器规格：
  - 主板：ASUSTeK COMPUTER INC. ROG STRIX Z390-FGAMING
  - 内存：31.2 GiB
  - CPU：Intel(R) Core(TM) i9-9900K CPU @3.60GHz x 16
  - 显卡：NVIDIA GeForce TRX 2080 Ti/PCle/SSE2
  - 硬盘：WDC WD1003FZEX-0 (1TB)
    - [读写速度约 150 MB/s](https://documents.westerndigital.com/content/dam/doc-library/zh_tw/assets/public/western-digital/product/internal-drives/wd-black-hdd/product-brief-western-digital-wd-black-pc-hdd.pdf)
- 测试场景 (JMeter)：
  - 极端情景 (1秒内达到指定并发量)：
    - 测试配置：模拟 1000 名用户同时发送请求，执行加载首页、文章列表及搜索、文章详情页、用户注册及登录流程。
      - 测试结果：系统运行稳定。
    - 测试配置：模拟 2000 名用户同时发送请求，执行相同操作。
      - 测试结果：系统错误率约为 1%，降至 1700 名用户则无错误。
    - 测试配置：模拟 3000 名用户同时发送请求，执行相同操作。
      - 测试结果：系统错误率急剧上升至 15% ~ 20%。
  - 正常情景 (10秒内达到指定并发量)：
    - 测试配置：模拟 1000 名用户同时发送请求，执行加载首页、文章列表及搜索、文章详情页、用户注册及登录流程。
      - 测试结果：系统运行稳定。
    - 测试配置：模拟 2000 名用户同时发送请求，执行相同操作。
      - 测试结果：系统错误率约为 1.5%，降至 1900 名用户则无错误。
    - 测试配置：模拟 3000 名用户同时发送请求，执行相同操作。
      - 测试结果：系统错误率急剧上升至 1.5% ~ 12%。
