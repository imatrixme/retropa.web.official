# Retropa Official Website

官网是独立子模块。React 19 + Vite + Tailwind，Bun 驱动构建、预览与只读报告。不依赖运营中台，不在浏览器存放服务账号密钥。

## 本地预览

```bash
bun install --frozen-lockfile
bun run build
bun run preview
```

默认地址 `http://127.0.0.1:4178/`；中文 `/zh-Hans/`。通过 `RETROPA_PREVIEW_PORT` 更换端口。开发模式用 `bun --bun run dev`，**开发服务器的 SPA fallback 不是生产 404 行为**。

```bash
bun run lint
bun run evidence
bun run evidence:http --base http://127.0.0.1:4179
bun run report --days 14
```

`build` 运行类型检查、客户端构建、构建期正文渲染，生成 72 个静态页面与 `404.html`。`evidence` 检查 H1、正文、canonical、语言信息、结构化数据、图片、目录锚点、完整指南章节、分享图与商店目的地，不执行单元测试。

## 页面与所有权

- 首页：Retropa 产品画面、GBA/DS/街机入口、皮肤/游戏库、画面与参数并排的滤镜对照、系统、开始路径和 Plus 边界。
- `/cores/`：系统格式矩阵与核心项目来源；不再重复图片墙。
- `/start/`：导入、首次游玩与 18 条常见问题，覆盖设备、格式、BIOS、街机、存档、手柄、Plus 和高级滤镜。`src/content/start-faq.ts` 拥有英文和简体中文问答；完整答案在构建时写入 HTML，每题有稳定锚点，不依赖点击后请求数据。其他语言明确链接英文指南，不伪装成已翻译内容。不保证搜索排名或 FAQ 富结果。
- `/delta-skins/`、`/crt-filters/`、`/arcade/`：英文与简体中文的完整产品说明，包含格式、操作步骤、恢复路径与能力限制。
- `/gba-emulator/`、`/ds-emulator/`：英文与简体中文的独立指南，分别解释 .gba 与 .nds、单屏按键与双屏触控、文件准备和故障恢复，不是替换关键词的重复页面。`src/content/system-guides.ts` 拥有内容，复用既有产品页模板与静态路由。
- `/terms/`、`/privacy/`：保留既有法律内容；隐私页面增加官网统计说明。
- 原有四类页面保留 15 种语言，用 `/{locale}/...` 静态路径。英文为根路径。首页、核心、条款、隐私的旧 `?lang=` 入口在 HTTP 层永久跳转，保留其他查询参数；新 sitemap 与导航只发布确定语言的路径。`src/lib/legacy-locale.ts` 拥有 Bun 预览迁移规则，Nginx 对应规则在 `deploy/legacy-locales.conf`。支持单个标准语言值，未知或重复 lang 不在 HTTP 层迁移；非标准语言别名仍由既有浏览器兼容逻辑处理。

`src/styles/tokens.css` 管理颜色、字体和共享控件；`hero.css` 管理首屏；`product.css` 管理首页；`pages.css` 管理参考与法律页面；`articles.css` 管理指南目录、章节和相关推荐；`display-study.css` 管理画面对照，`crt-television.css` 管理电视材质。`CRTTelevision` 拥有内框与屏幕共用的 SVG 裁切几何；`DisplayStudy` 拥有滤镜、尺寸、对照及播放状态，`src/content/display-study.ts` 拥有模式目录和说明。`SiteLayout` 拥有桌面导航、原生 details 移动导航与页脚；`ProductHero` 呈现首屏，`DiscoveryIndex` 呈现系统入口，`ProductShowcase` 展开产品场景；`src/lib/analytics.ts` 是唯一网站采集边界。所有旧页面与首页 skins/filters/library 锚点保留，完整产品原图仍可直接打开。

产品媒体来自本机既有官网工作树 `public/screenshots` 的素材集，未复制该工作树的改版代码。上线前仍须确认媒体符合当前 App 版本和素材授权；这些不是本次从真机重新截取的图片或游玩实录。

## 重玩与首屏

首屏围绕 iOS 重玩意愿，保留 Retropa、iPhone/iPad、下载与免费/内购边界；不创建游戏房间或首屏额外选择器。产品首屏之后直接提供系统入口，再进入皮肤、游戏库与 CRT 滤镜对照。15 种语言的重玩文案在 `src/content/replay.ts`；当前本地事件 revision 为 `discovery-2026-09-v7`，静态 HTML 与事件版本一致。事件名称、许可、ASC campaign 与客户端契约不变，小流量仍汇总同一商店 campaign，页面与按钮差异由网站事件表达。

Hero 始终使用静态 DOM 图片，保留大尺幅构图和直接打开原图的链接。已按本轮验收移除 Three.js、Hero Canvas、指针视差及其加载/回退状态；不添加替代动画。首屏图像和下载不依赖 JavaScript。下方功能性的滤镜对照独立保留。

Retropa 字标与编辑式标题使用本地 [Bricolage Grotesque](https://github.com/ateliertriay/bricolage)，正文、普通标签用 Archivo 与系统字体栈；中文、日文等按语言回退，不强套简体字形。字标使用固定 24 光学尺寸，章节约 34–48px、手机 28–37px，正文 16px/1.7；IBM Plex Mono 仅用于技术标识、编号和数值。所有字距为 0，字号通过固定断点调整，不随视口宽度连续缩放。朱红主动作、近黑首屏、绿色皮肤与 Plus 区域组成多层级配色，不增加首屏动画。

已移除倾斜中文展示字体及其子集脚本和处理依赖，新增文案不再需要维护中文字库。仍在使用的本地字体许可随 `public/fonts` 交付。

## 本地 v7 素材与导入链路

本轮派生素材不覆盖原图：material-detail 从 material 的 `(0,416,720,1140)` 裁出；material-controls 为 `(0,936,720,620)` 的材质局部；library-detail 为 `(0,496,720,1060)`；filter-detail 为 `(0,416,720,1140)`。使用 `cwebp -q 88 -crop` 产出 WebP。这些是既有营销图的派生，不是新的真机截图。内置 imagegen 在当前会话不可用，未转用付费 CLI 或生成虚构界面。

六张 `public/product/social-*.jpg` 为 1200×630 产品分享图，构图源在 `scripts/social-artwork.html`。开发服务器访问该文件，以 `variant=home|gba-emulator|ds-emulator|arcade|delta-skins|crt-filters` 选择，等待 canvas 的 `data-ready=true` 后截图，JPEG 质量 85。制作文件不进入发布页面；社交图只在元数据引用，不作为可见页面首屏重复下载。

产品指南提供与可见导航一致的 BreadcrumbList，分享元数据使用各自主题图。静态 HTML 增加 [Smart App Banner](https://developer.apple.com/documentation/webkit/promoting-apps-with-smart-app-banners)，仅声明真实 app-id，不虚构深链或归因参数。横幅需要真机 Safari 验证，模拟器不显示；本地检查不能证明它已带来安装。

本地 v7 尚未部署。GA4 Web Measurement ID、ASC provider token 与仓库外注入脚本的同意策略仍是发布前需处理的边界。GBA、DS 等入口是产品匹配的搜索意图，不是已用实时趋势验证的低竞争词。视觉验收不能替代发布后的非品牌点击、到商店点击和安装归因观察。

## 原生画面预览

`DisplayStudy` 延迟加载约 18 KB（gzip 约 6.3 KB）的 WebGL2 模块，不增加依赖。原始 / CRT Lite / LCD Grid / Scanline 加上 CRT V4 / Trinitron V1 / DMG 共七档，默认 CRT V4。可拖动对照画面、键盘滑杆与播放/暂停使用相同的项目自有动态场景；视口外和后台停止帧循环，减少动态偏好下不自动播放，无 WebGL 或 context lost 时显示标记为原始画面的 `homebrew-preview.png`。这不是可游玩的模拟器，也没有下载 ROM。

机壳采用 CSS 材质；内框与画面共用一条四边外鼓的对象坐标裁切路径，玻璃和对照线在同一容器内。桶形投影、边缘衰减与反光共同表达凸面，不再分别指定两个不匹配的百分比圆角，也不恢复 Three.js。尺寸滑杆在 72% 至 100% 连续调整，输出按照实际显示像素取值（DPR 上限 2，宽度上限 1440），不取整为源画面的整数倍率。玻璃造型属于网页展示外壳，不代表原生滤镜强制曲面或裁切。

来源与适配：

- 场景：父项目 `retropa/Filters/Metal/VintageTVHomebrewSource.metal`，授权说明在 `retropa/resources/FilterShowcase/VintageTV/HomebrewPreview.manifest.json`。源 SHA-256：`739412f597530faa45933ee947bd4d8155d199da4ae80f290b246880edc8ef44`。
- 公式：`NativeFilterEffectCRT.metal`、`NativeFilterEffectLCD.metal`、`NativeFilterEffectScanline.metal` 和 `NativeFilterShaderShared.metalh` 的基础 viewport response、scanline、mask、vignette 系数。
- 高级公式：`NativeFilterEffectRetropaCRTV4.metal` 的 Gaussian beam coverage / integrated cosine、`NativeFilterEffectRetropaTrinitron.metal` 的 Gaussian pixel integral / harmonic attenuation、`NativeFilterEffectRetropaDMG.metal` 的 integrated cell mask / reflective substrate。
- `src/lib/display-shaders.ts` 负责场景与合成，`display-signal-shader.ts` 负责单帧信号准备，`display-advanced-shaders.ts` 负责高级显示特征。它们是受限的 GLSL 适配，网页省略 temporal history、LCD temporal PWM、完整多阶段 bloom 和原生颜色管理，信号缓存使用 RGBA8 而非原生浮点精度。不能宣传为 Metal 原生滤镜的精确复刻；页面保留近似预览说明。
- 静态备用 PNG 来自本轮浏览器运行该自有场景后捕获的原始画面，没有叠加网页标签或商业游戏内容。日后原生源变更时先评估差异，不自动同步全部滤镜。

关键词证据、优先级与发布后观察规则见 [KEYWORD_PLAN.md](KEYWORD_PLAN.md)。不把上游核心关键词、PackHub 数据或未知查询当作官网获客。

## 采集配置

`.env.local` 中只允许公开标识符，格式见 `.env.example`。修改后重新构建：

```dotenv
VITE_GA4_MEASUREMENT_ID=G-YOURSTREAM
VITE_ASC_PROVIDER_TOKEN=YOUR_PROVIDER_TOKEN
```

两项均不可用 vendor number 或 GA4 property ID 替代。未配置 GA4 时不加载 SDK、不显示无效授权弹窗；下载始终可用。所有下载按钮共用 `ct=retropa_web_v1`，小流量时不按按钮拆散 ASC campaign；按钮位置由网站事件区分。

真实配置的获取顺序：

1. 在 Google Cloud 项目启用 **Google Analytics Admin API**。本次只读验证返回 `SERVICE_DISABLED`，项目编号 `818140976410`；未自动修改云项目。
2. 在 GA4 property `523609540` 中确认 `retropa.com` 的 Web data stream，取得 `G-...` Measurement ID。若尚无 Web stream，需要在 GA4 后台创建，再将 ID 放入本地环境配置。
3. 在该 stream 关闭 Enhanced Measurement 的自动滚动、出站点击、站内搜索等采集，避免与这里的受控事件重复及附带 URL 数据。关闭 Google signals 与广告个性化，不启用跨域 linker。
4. 在 GA4 管理页注册下表的事件级 custom dimensions。注册不是历史数据回补，等待新事件进入后再分析。
5. 在 App Store Connect → Analytics → Campaign links 生成官网链接，取其 `pt`，不是已有的 `86170696` vendor number。完整说明见 [Apple campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/)。

| 范围 | 事件 | 参数 / 语义 |
| --- | --- | --- |
| 网站 | `web_page_view` | 当前页面访问；仅许可后，不回补之前访问 |
| 网站 | `web_download_clicked` | `placement`，不是安装成功 |
| 网站 | `web_feature_viewed` | `feature_id`；可见面积达到 25%，单页面单 feature 一次 |
| 网站 | `web_feature_selected` | 用户选择展示内容，与实际看见分开 |
| 网站 | `web_guide_opened` | 点击开始指南入口 |
| 网站 | `web_filter_preview_changed` | `display_mode`：Original / CRT Lite / LCD Grid / Scanline / Retropa CRT V4 / Retropa Trinitron V1 / Retropa DMG；受相同许可规则约束 |
| 客户端 | `growth_funnel_milestone` | `milestone`：`first_launch`、`import_succeeded`、`first_gameplay_started`、`played_60s`、`paywall_exposed` 等 |
| 客户端 | `growth_funnel_failure` / `growth_funnel_outcome` | 失败与首局结果，不等于付费 |
| 交易 | ASC / RevenueCat transaction or cohort reports | 购买与净收入真值；subscriber attributes 不是事件计数 |

建议注册网站维度：`page_id`、`site_revision`、`locale`、`placement`、`feature_id`、`entry_source`、`display_mode`。客户端至少注册 `milestone`，再按需要注册已有 `source`、`system_id`、`app_version`、`build_number`、`failure`、`outcome`。所有名称均以真实事件 payload 为准。

网站自定义事件只含 allowlisted 页面/功能标识、版本、语言和粗分类入口来源。不传完整 referrer、任意 URL query、ROM 名称、支付信息；不用指纹，不跨网站与 App 合并用户 ID。Google SDK 自身仍会处理 cookies、浏览器及网络信息，不能宣传为完全匿名。选择保存在本机，拒绝不加载 SDK，撤回后禁用并刷新页面。配置字段参照 [Google tag configuration](https://developers.google.com/analytics/devguides/collection/ga4/reference/config)。

## 证据与跟进

```bash
bun run report --days 14
bun run search-console --days 28
bun run evidence --events /absolute/path/browser-events.json
```

报告脚本仅请求 Google 只读 API。默认复用 `~/.retropa/asogeo-dash/secrets/retropa-firebase-adminsdk-fbsvc-e6a26c3b4a.json`；可用 `GOOGLE_APPLICATION_CREDENTIALS` 覆盖。报告默认写入 `~/.retropa/official-website/reports/`，目录权限 700、文件 600；密钥和 token 不写入报告。此目录可由外部 AI/定时任务调用，不另建常驻服务。

脚本分别保存 GSC 页级和查询词数据、GA4 平台/事件汇总、可用时的客户端 milestone 明细。日期窗口默认避开最近三天，但仍保留来源的阈值/行数元信息，不能保证两系统时区或隐私口径相同。缺失、拒绝授权、未采集和真实空结果分别保留。当前 ASC 报告未采集，不能用官网下载点击与全量 App 下载相除。

`search-console` 专门收集当前和相邻前期的 Web search 数据，默认 28 天、最终数据、官网主域 page 过滤；日期、页、查询、查询/页、国家分别请求，不混算 byPage 与 byProperty。每个维度最多采集 100000 行，达到上限明确标记 capped，上游匿名/截断限制仍保留。`--end YYYY-MM-DD` 可固定重跑窗口。采集结果不包含运营结论。

浏览器可用 `?analytics_debug=1` 查看 `window.__retropaEvidence`，最多保留当前页面 50 个事件，无跨页持久化。`queued` 只表示进入 SDK 队列，不表示已经入库。该参数不会写入遥测地址。

上线后先标注发布日期，按入口页、语言和 App 版本保留基线，再逐周看：

- GSC 非品牌曝光与点击是否增加；查询汇总因匿名查询不一定等于页级汇总。
- 允许统计的访客中，展示内容选择与下载按钮点击如何变化，不能外推成全部访问。
- ASC campaign 是否有足够数据，是否有真实首次下载；隐私阈值下的缺失不视为零。
- 客户端导入、第一局和付费墙是否有可比较事件；里程碑去重是 session 语义，不直接当作新用户人数。
- 在可比较 cohort 内观察交易与退款，禁止按网页总点击和全量交易计算所谓全链路转化。

这次仅接入网站采集与已有客户端事件契约，不修改客户端体验、价格、权益或购买实现。客户端事件是否由线上版本上报仍需验证；报告已经明确显示缺口，不能宣布“全链路已打通”。

## 部署与验证

发布 `dist/` 整体目录，禁止所有未知路径回退 `index.html`。Nginx 参考 `deploy/nginx.conf.example`，合并现有 TLS 证书配置后执行 `nginx -t`；示例不是可直接覆盖的生产配置。保留 HTTP→HTTPS、www→主域重定向，哈希资源长期缓存，HTML 重新验证。构建目录有真实 404 页面，预览服务对未知地址返回 HTTP 404。

先在 Nginx 的 `http {}` 层包含 `deploy/legacy-locales.conf`，再合并示例 server 块；不要把 map 放进 server 块。旧四入口的 15 种标准语言、无尾斜杠和 index.html 形式均迁移到规范静态路径。GET/HEAD 返回 308，删除 lang 并保留 utm_source、ct 等原有参数；未知路径保持 404。

`evidence:http` 对正在运行的服务执行只读 HTTP 验收：72 个静态页面、版本标记、60 个语言迁移组合、查询参数、HEAD、未知路径及 sitemap/robots。目标可以是本地预览或单独授权发布后的主域；检查不会追踪重定向到 App Store，也不会提交索引。它允许重定向指向当前测试 origin 或固定的生产主域，不接受任意外域。上线前以本地制品检查为基准，上线后对生产 origin 重跑，避免将旧版 200 当成发布成功。

v5 基线已按用户要求提交：官网 `b207ab1`，父仓库 `bff11483`。v6 于 2026-09-05 部署，源码与发布记录随本轮提交保存，不自动 push。回滚使用之前完整部署制品与对应配置，不恢复部分文件。

### 当前生产发布记录

新版 sitemap 于 2026-09-05 07:07 UTC 经用户授权提交至 `sc-domain:retropa.com`，包含 68 个页面。Google 返回 204，回读为 pending；当时仍显示的 12 个 URL 是历史统计，不能视为新版收录结果。回执为本机 `~/.retropa/official-website/reports/sitemap-submission-1788592025322.json`。常规报告脚本继续保持只读。

2026-09-05：通过 `root@23.94.238.46` 发布到现有 `1Panel-openresty-uQjv`，未更换运行时、证书或其他站点。站点 host 路径为 `/root/panel/1panel/apps/openresty/openresty/www/sites/retropa.com/`，容器内为 `/www/sites/retropa.com/`。`index` 软链接从 `releases/20260324-000807` 原子切换至 `releases/20260905-v6`；旧目录完整保留，新目录也保留旧版哈希资源供已打开的页面加载。

生产配置位于 `/root/panel/1panel/apps/openresty/openresty/conf/conf.d/retropa.com.conf`，新增同目录 `00_retropa_legacy_locales.conf`，复用现有 http 层 include。实际配置保留证书、日志、ACME 和 TLS 设置，加入真实 404、语言迁移、www 归一化与资源缓存，不是直接覆盖示例模板。配置备份和上传制品位于服务器 `/root/deploy/retropa-official/20260905-v6/`，旧配置名为 `retropa.com.conf.before`。回滚时恢复该配置，将 map 移出 conf.d，执行 `nginx -t`，再原子切回旧软链接并 reload；不可删除旧 release。1Panel 后续重写站点配置时须保留这些规则并重新验收。

本机发布材料位于 `~/.retropa/official-website/releases/20260905-v6/`。上传包 SHA-256 为 `65023119d2bd144917ed0a7ca2da18f7eb912e0c7497835cfec4a7a1ef65aef7`，远端一致。包内携带的 204 个 macOS `._*` 元数据侧车文件已从发布目录清理，原上传包保留；今后打包使用 `COPYFILE_DISABLE=1 tar --no-xattrs`，避免附带平台元数据。

本次构建、lint、68 页静态检查、生产 Nginx 语法检查和公网 139 项 HTTP 验收通过，版本为 `product-2026-09-v6`。公网 HTTP 由 Cloudflare 返回 HTTPS 301，www 返回主域 308。Playwright 线上桌面/手机截图前缀为 `deployed-`。未运行单测，也未修改原生代码。

生产响应额外包含 Cloudflare 注入的 beacon、Microsoft Clarity 与 Rocket Loader；它们不是本仓库静态构建输出，本次未修改 Cloudflare 配置。当前浏览器环境拒绝连接两个统计域名，并有 Rocket Loader 相关 modulepreload credentials 警告。仓库内的许可控制不能代表这些外部注入脚本也受到相同控制，完整统计许可与加载优化需单独核对 Cloudflare 配置。GA4 Web Measurement ID 和 ASC provider token 仍缺失，发布不代表归因链路已打通。

2026-09-05 采集复核：现有本地配置没有 Web Measurement ID 或 ASC provider token；Google Analytics Admin API 仍返回 403 SERVICE_DISABLED。需在项目 retropa 启用该 API、确认 property 523609540 的官网 Web stream，再配置公开 Measurement ID；ASC provider token 从官网 campaign link 获取，不能以 vendor number 替代。GA4 注册 `milestone` 等事件维度后需验证新数据，不能历史回补或用事件总数猜各阶段。网站仍按未配置状态运行，不加载无效 SDK，不影响下载。本轮未代为启用云 API、注册维度或更改 App Store 元数据。

视觉截图在忽略目录 `output/playwright/`。运行时浏览器检查覆盖桌面/手机、语言切换、原图链接、指南、主题、404、授权与撤回；显示预览另验证模式像素差异、播放/暂停、减少动态与 WebGL 故障回退。模拟 SDK 仅证明本地事件契约，没有向生产 GA4 注入测试流量。

2026-09-05 静态 Hero 与字体收敛版验收：构建、lint、68 页静态检查、OpenSpec strict 和原生 simulator `xcodebuild` 通过，未运行单测。浏览器覆盖 320/390/768/1440/1920 宽度，以及 15 种语言的 320px 首屏文本边界；未发现首屏文字横向溢出，下载按钮与下一段入口可见。Hero 内 Canvas 和 Three.js 资源请求均为零，指针移动前后媒体截图相同；禁用脚本仍可显示图片并下载，键盘可打开原图。详情页中文混排标题避免把短词拆开，浅色/深色功能区均检查。

上一版四模式验收截图以 `simple-` 开头，`replay-` 是更早历史记录。本版七模式与共形曲面截图以 `crt-` 开头，下载和滤镜调试事件使用 v5 revision。静态检查进一步逐条核对英文、中文各 18 个 FAQ 的问题、完整答案及锚点，而不只是数量。浏览器证据不等于 iOS Safari 真机、线上 SEO 或真实 GA4 到账验收；媒体仍待发布前版本/授权核对。

2026-09-05 CRT 与 FAQ 增量验收：构建、lint、68 页正文检查、OpenSpec strict 和 simulator `xcodebuild` 通过，按仓库要求未运行单测。Chromium 在 1440 / 390 / 320px 宽度、72% / 100% 电视尺寸下确认画面与玻璃边界一致、四角正确裁切、无页面横向溢出；另检查手机 DPR 2。七模式均有不同且非空的像素结果，WebGL error 为 0，播放变化、暂停稳定，键盘尺寸与对照滑杆正常。无脚本、无 WebGL 和 context lost 时保持静态画面；减少动态时默认暂停。中英文各 18 个 FAQ 在无脚本时仍有完整正文且可用键盘展开。独立浏览器上下文没有运行时错误或警告，滤镜与下载事件为 `consent_blocked`，GA4 SDK 与 Three.js 请求为零；线上采集配置缺口仍未补齐。

2026-09-05 v6 修复验收：Bun 构建、lint、68 页静态检查、simulator `xcodebuild` 通过，未运行单测。独立本地 Nginx 1.28.0 编译后加载本仓库 map 与对应重定向规则，语法检查成功；Bun 4179 与 Nginx 4180 各通过 139 项 HTTP 检查。Nginx 仅监听回环地址，验证后已停止，未修改系统或线上 Nginx；真实生产 TLS、CDN/WAF 仍需发布时验证。Chromium 覆盖 320/390/1440 宽度的首页、街机、滤镜、皮肤及中文街机页，标题与页面无横向溢出，旧中文入口在 HTTP 层跳转并保留归因参数。截图前缀为 `seo-arcade-`；本轮预览位于 `http://127.0.0.1:4179/`，日志在 `~/.retropa/official-website/preview-seo.log`。
