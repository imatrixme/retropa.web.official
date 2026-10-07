# Retropa 官网关键词与内容计划

更新：2026-09-05；2026-10-06 修订“搜索与 AI 抓取”一节，同日按用户要求暂时隐藏 agent 可读层。状态：本地实现，未部署。本文是 Agent 对只读证据的分析，不是采集脚本生成的评分，也不是搜索量预测。

## 证据与口径

原始快照保留在本机，包含请求、过滤条件、响应聚合类型、分页状态和失败原因：

- `~/.retropa/official-website/reports/search-2026-09-05T02-07-37-413Z.json`，下文记作 **S1**。
- `~/.retropa/official-website/reports/inspection-2026-09-05.json`，下文记作 **I1**。
- 当前窗口：2026-08-06 至 2026-09-02；对照窗口：2026-07-09 至 2026-08-05。
- GSC `type=web`、`dataState=final`。官网通过 page 正则仅保留 `https://retropa.com/`；不含 PackHub 或 www 历史路径。
- `official*` 返回 `byPage`，`domainDaily` 返回 `byProperty`。两种展示与点击口径不能相减或混算。首次查询未过滤主域时，`retropa` 是 68 展示、8 点击；主域过滤后的页级查询是 150 展示、9 点击，两者不是数据前后矛盾。
- 匿名查询不在关键词明细中；分页完毕也不保证拿到全部底层数据。GSC 展示不是市场搜索量，缺词不等于没有需求。这里不计算“AI 推荐率”。

## 观察到的事实

官网页级汇总；各路径合并已有 `?lang=` 参数，不去重为用户或独立搜索次数：

| 路径 | 前 28 天展示 / 点击 | 近 28 天展示 / 点击 |
| --- | ---: | ---: |
| `/` | 164 / 5 | 195 / 12 |
| `/cores/` | 102 / 0 | 92 / 1 |
| `/terms/` | 54 / 0 | 53 / 1 |
| `/privacy/` | 39 / 0 | 33 / 0 |
| 官网合计 | 359 / 5 | 373 / 14 |

证据：S1 `previous.officialPages`、`current.officialPages`，合计与 `officialDaily` 核对。

近 28 天主域查询明细：

| 已披露查询 | 展示 | 点击 | 平均位置 | 解释 |
| --- | ---: | ---: | ---: | --- |
| `retropa` | 150 | 9 | 3.79 | 明确品牌 |
| `retropaff` | 20 | 2 | 4.55 | 意图未确认，不自动归为有效品牌需求 |
| `retro pa` | 20 | 0 | 8.95 | 分词或其他意图，待确认 |
| `lakesnes` | 7 | 0 | 19.00 | 上游核心名称 |
| `retropaxff` | 5 | 0 | 8.40 | 意图未确认 |
| `privacy policy retroplaygroundzone.com` | 4 | 0 | 30.50 | 其他网站的法律信息需求 |
| `retro45` | 2 | 0 | 55.50 | 无明确产品匹配 |
| `gba core` | 1 | 0 | 10.00 | 样本太小，且更像核心资料需求 |
| `skyemu` | 1 | 0 | 6.00 | 上游核心名称 |
| `redpah` | 1 | 0 | 65.00 | 意图未确认 |
| `retro app datenschutz` | 1 | 0 | 60.00 | 法律信息需求 |
| `retropaf` | 1 | 0 | 12.00 | 意图未确认 |
| `retropass` | 1 | 0 | 56.00 | 意图未确认 |

证据：S1 `current.officialQueries`；实际落地页见 `current.officialQueryPages`。例如 `gba core` 落到旧 `/cores/?lang=id`，`skyemu` 落到旧 `/cores/?lang=th`；这不足以支持优先投入印尼语或泰语内容。前一窗口出现过 `mgba shader` 1 次曝光、0 点击，也不能当成强需求。

I1 证实：首页、核心页均为 `PASS / Submitted and indexed`，抓取成功、允许收录；首页最近抓取于 2026-09-04T15:54:58Z。旧 `www.retropa.com/platforms/psp?system=windows` 被归为指向首页的 canonical 替代页；实际线上请求旧路径仍返回 200 首页壳。不能宣传本站支持 PSP/Windows，也不应为这个历史地址新造产品页。

## 判断

当前证据支持“有品牌识别，但非品牌产品需求覆盖很弱”，不支持“官网完全没有被 Google 收录”。核心与法律页获得一定曝光，不代表这些访问会带来安装。新版内容针对产品差异和实际问题提供可读的落地页，不能把改版前后波动直接归因为美术或关键词。

## 关键词到页面的分工

每行只保留一个主要意图；同义词自然出现在正文，不复制多页争夺同一组词。中文页面承担已有中文使用者的理解需求，GSC 当前没有足够证据证明中文 Google 搜索规模。

| 顺序 | 词组 | 证据等级 | 主要页面 | 内容任务 |
| --- | --- | --- | --- | --- |
| P0 | `retropa`、`Retropa emulator` | `retropa` 已观察；组合词待验证 | `/` | 明确 iPhone/iPad、GBA/DS/Arcade、资源与 Plus 边界，展示完整产品图 |
| P1 | `Retropa Delta skins`、`import deltaskin iPhone` | 产品匹配假设；当前窗口未披露 | `/delta-skins/` | 格式、系统与方向适配、导入步骤、失败恢复、PackHub |
| P1 | `CRT filter iPhone emulator`、`LCD filter retro games`、`Retropa shaders` | 产品匹配假设；历史 `mgba shader` 仅 1 次曝光 | `/crt-filters/` | 七模式近似演示、非整数缩放价值、.slangp 依赖、性能与权益 |
| P1 | `arcade emulator iPhone`、`Neo Geo emulator iPhone`、`CPS emulator iOS` | ASO 有对应排名，Google 当前窗口未披露，不能当作 Google 搜索量 | `/arcade/` | 街机家族、Neo Geo 与 Pocket 的区别、neogeo.zip、ROM set/父集/BIOS、首次操作 |
| P1 | `import ROMs Retropa`、`GBA ROM import iPhone` | 激活工作流假设；当前窗口未披露 | `/start/` | 下载、文件导入、第一局、支持入口 |
| P2 | `Retropa supported systems`、`Retropa GBA core` | `gba core`、`lakesnes`、`skyemu` 有极少曝光 | `/cores/` | 系统/格式/核心来源；不竞争上游项目的下载入口 |

每项策略共用以下决策契约，证据差异见表中对应行：

- Decision：发布对应页面的实质内容，不扩建批量 SEO 文章站。
- Observed evidence：S1 的查询、查询/页、页面明细；新词明确保持假设状态。
- Inference：文件兼容、显示效果和街机导入问题比单独核心名称更接近 Retropa 的实际价值，但尚未被搜索样本证实。
- Confidence：品牌中等；非品牌低。不能依据这些数据分配大额投放预算。
- Single variable：后续每次只修改一个意图页面的标题或一个内容段；本次整体改版作为新基线，不作为单变量实验。
- Success metric：相应页面出现可复现的非品牌相关曝光与点击，同时保留同口径官网点击趋势。CTR 只作方向性指标，不用 1–2 次展示计算优劣。
- Guardrail metric：原品牌入口正常、canonical 不偏离、下载链接可用、错误与页面性能无回退；不以无关词曝光上升当成功。
- Minimum sample or time window：部署后先确认具体新 URL 已收录，再观察至少 28 个完整日期；样本仍稀少则标为未决，检查内容和分发，不无限等待统计显著性。
- Stop condition：出现虚假能力、失效导入步骤、错误归因、索引错误或明显不匹配流量时暂停扩张；8 周仍无目标相关曝光时重新选择意图，不继续堆相似文章。
- Evidence IDs：S1 `current.officialQueries`、`current.officialQueryPages`、`current.officialPages`、各自 `previous` 对照；I1 各 URL 的 `indexStatusResult`。

暂不优先：`best emulator`、`free ROM download`、`PS2 emulator`、`Dolphin emulator`、`PSP Windows`、单独 `lakesnes` / `skyemu` 下载词，以及意图未确认的 `retropaff`。不支持的能力与 ROM 分发意图不能为了流量包装为卖点。

## 搜索与 AI 抓取

已实现：完整静态正文、确定语言路径、自指 canonical、互惠 hreflang、语义标题、原图及说明、真实内链、与可见事实一致的 SoftwareApplication/WebPage 数据。重要内容不依赖点击标签才出现，也不按 User-Agent 给爬虫不同正文。

**2026-10-06 起暂时隐藏**：用户要求“AI相关先隐藏”。下面两段说的 Content Signals、`/llms.txt`、`index.md` 和 Markdown 协商，都由 `src/lib/site-config.ts` 的 `agentReadable` 控制。它现在是 `false`，构建不发布其中任何一项，`robots.txt` 回到 v10 的通用放行。关闭时，完整性检查和 HTTP 证据会确认这些产物都不存在。重新开启只需改这个值，并在同一次发布中合入 `deploy/nginx-agent-readable.conf.example`。以下两段是开启后的行为。

`robots.txt` 的现有通用放行保持不变，已覆盖搜索爬虫；不擅自改变训练爬虫授权。开启时，构建在放行规则旁声明 [Content Signals](https://contentsignals.org)：`search=yes, ai-input=yes`；`ai-train` 不声明，按规范等于既不授权也不限制，与此前状态一致，是否授权仍由用户决定，改动只涉及这一行。完整性检查要求 `search` 与 `ai-input` 必须声明，且声明与抓取规则一致。上线后还要验证 CDN/WAF 的实际放行与日志，模拟 User-Agent 的本地 200 不是实际机器人已经抓取的证据。

按用户 2026-10 的要求（参照 Cloudflare 对 agent 友好性的检查项），新增 `/llms.txt` 站点概览，并在每个可索引页旁生成 `index.md`。`index.md` 由该页 `<main>` 转换而来，与 HTML 内容一致；页面用 `<link rel="alternate" type="text/markdown">` 声明它，响应用 `Link: rel="canonical"` 指回 HTML。同一 URL 按请求的 `Accept` 返回 Markdown，而不是按 User-Agent 区分，因此不是隐藏的“AI 版”，也不构成 cloaking。Google 不需要这些文件：AI 搜索仍以可抓取、可索引、有用的内容为基础。它们服务于直接读取页面的其他 agent。仍然不做虚构评分或关键词 meta 堆砌，结构化数据也必须符合页面事实。[Google AI features](https://developers.google.com/search/docs/appearance/ai-features/)

OpenAI 的搜索爬虫与训练爬虫具有不同用途；放行并不保证被推荐或引用。[OpenAI crawler documentation](https://developers.openai.com/api/docs/bots)

## 后续操作

### 2026-09-05 SEO 与 ASO 对齐修复

官网街机页、首页、核心页和结构化数据补齐 Neo Geo 街机，不与 Neo Geo Pocket 混称；客户端证据为 `BIOSStore+CPS1QSound.swift`、`BIOSManagementView.swift` 和街机核心说明，发布商店 2.3.0 同样列出 Neo Geo。皮肤、滤镜与街机详情标题明确 iPhone/iPad 使用场景，去掉皮肤页标题的重复品牌。不扩建同义词页面，不改既有首页美术与价格。

待审核的商店承接文案（尚未上传）：

- 英文滤镜卖点：Advanced CRT filters adapt to your iPhone display without requiring integer scaling. Keep the original aspect ratio and choose the display area that fits your skin. Advanced filters require Plus.
- 中文滤镜卖点：高级 CRT 滤镜适应 iPhone 实际显示区域，无需固定整数倍缩放；保留原始宽高比，让画面更合适地融入所选皮肤。高级滤镜需要 Plus。
- 日文滤镜卖点：高度な CRT フィルタは整数倍拡大に制限されず、iPhone の表示領域に合わせて描画します。元の縦横比を保ち、スキンに合う表示サイズを選べます。高度なフィルタには Plus が必要です。
- 终身商品名称候选：Retropa Plus Lifetime。必须先核对商品类型与现有权益，再在 ASC 中审核更名，不改变 SKU 或权益。

商店截图应使用原生输出，在两个真实手机视窗尺寸下展示同一帧，解释留白、比例与滤镜结构；网页 WebGL 预览不是商店真机证据。不要为了同步卖点，把已占有排名的 Arcade/GBA 标题直接替换为低需求滤镜词。商店关键词、截图、价格分开观察，不把整体改版伪称单变量实验。

### 发布与观察

1. 先完成人工视觉与产品文案验收，再单独授权部署，保留发布时间与制品版本。
2. 随静态制品部署真实 404 与域名跳转；检查新详情 URL 的 HTML 和 canonical，再在 GSC 检查收录。2026-09-05 已经用户授权提交包含 68 个页面的 sitemap，API 返回 204；这不是逐 URL 请求索引，也不证明收录。
3. 每周运行下方脚本，报告留在 `~/.retropa`，由 Agent 读取原始证据作出判断。
4. GA4 配好后观察许可用户的 `web_filter_preview_changed`、详情页访问和下载意图；预览交互不能代替真实安装与付费。
5. 新页面收录后的首个完整 28 天，按上述页面分工检查查询匹配，再决定只改标题、补充具体问题还是停止该方向。

```bash
bun run search-console --days 28
bun run search-console --days 28 --end 2026-09-02
bun run report --days 28
bun run evidence
```

接口行为依据：[Search Analytics query](https://developers.google.com/webmaster-tools/v1/searchanalytics/query)。脚本没有关键词商业评分、自动发布、自动改价或自动生成文章功能。
