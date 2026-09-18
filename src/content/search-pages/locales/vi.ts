import type { SearchPageContent } from "@/content/search-pages/types"

/**
 * Search landing page content for this locale.
 * Pages absent from this file are not published in this language, and are
 * therefore not registered as language alternates.
 */
export const pages: Record<string, SearchPageContent> = {
  "gb-emulator": {
    "kind": "system",
    "slug": "gb-emulator",
    "label": "GB",
    "title": "Trình giả lập Game Boy cho iPhone & iPad | Retropa",
    "description": "Chạy các tệp tin .gb của bạn trên iPhone và iPad với Retropa. Nhân giả lập nào xử lý GB, cách nhập một game, cách thiết lập màn hình và tay cầm, cùng những gì cần kiểm tra khi một tệp tin không mở được.",
    "summary": "Retropa chạy các game Game Boy từ tệp tin .gb của bạn trên iPhone và iPad, với bốn nhân giả lập có thể hoán đổi cho nhau, giao diện máy cầm tay, hiệu ứng LCD và CRT, cùng tính năng gán nút cho tay cầm.",
    "sections": [
      {
        "title": "Bắt đầu với tệp tin .gb",
        "body": "Retropa chơi các game Game Boy từ những tệp tin bạn đã sở hữu. Ứng dụng tải miễn phí và không kèm theo game hay tệp tin BIOS, vì vậy hãy chuẩn bị tệp tin game trước khi bắt đầu và giữ một bản sao nguyên vẹn bên ngoài ứng dụng để dự phòng.",
        "points": [
          ".gb là game Game Boy; .gbc thuộc về Game Boy Color.",
          "Đổi tên phần mở rộng tệp tin không chuyển một game sang hệ máy khác.",
          "Hãy giữ nguyên tệp tin gốc cho đến khi game chạy đúng."
        ]
      },
      {
        "title": "Nhân giả lập nào chạy game Game Boy",
        "body": "Retropa cung cấp nhiều hơn một nhân giả lập có thể chạy các tựa game Game Boy, và bạn có thể chuyển đổi giữa chúng theo từng game. mGBA và SkyEmu đều hỗ trợ GB, GBC và GBA, SameBoy tập trung cụ thể vào GB và GBC, còn JGenesis bao quát GB cùng với các hệ máy Sega của nó. Nếu một nhân giả lập gặp vấn đề với một tựa game cụ thể, hãy thử nhân giả lập khác trước khi cho rằng tệp tin bị hỏng.",
        "points": [
          "mGBA là lựa chọn đầu tiên phù hợp cho việc chơi hằng ngày.",
          "SameBoy tập trung vào độ chính xác của GB và GBC.",
          "Nhân giả lập đã chọn được ghi nhớ theo từng game."
        ]
      },
      {
        "title": "Nhập game từ ứng dụng Tệp tin",
        "body": "Hãy chắc rằng tệp tin đã được tải về máy, chứ không chỉ hiển thị dưới dạng bản giữ chỗ trên đám mây trong ứng dụng Tệp tin. Mở mục nhập trong thư viện Retropa và chọn game. Khi game đã xuất hiện, hãy mở nó và xác nhận hình ảnh, âm thanh cùng các nút bấm mặc định trên màn hình đều hoạt động trước khi bạn bắt đầu tùy chỉnh bất cứ thứ gì."
      },
      {
        "title": "Chọn bố cục phù hợp với màn hình gốc",
        "body": "Bố cục Game Boy cần một D-pad, A và B, cùng Start và Select. Chế độ dọc đặt màn hình phía trên các nút điều khiển, phù hợp khi chơi bằng một tay; chế độ ngang cho các nút bấm nhiều không gian hơn. Hãy kiểm tra rằng vùng hiển thị game không bị giao diện che khuất ở cả hai hướng màn hình, và cả sáu nút đều có thể chạm tới.",
        "points": [
          "Kiểm tra từng nút bấm, không chỉ phần hình nền.",
          "Có thể nhập các gói .deltaskin của Delta, nhưng giao diện DS hay GBA không phải là bố cục GB.",
          "Giao diện cao cấp và bộ lọc nâng cao cần có Retropa Plus."
        ]
      },
      {
        "title": "Màn hình xanh, lưới LCD hay điểm ảnh sạch",
        "body": "Hãy bắt đầu với hình ảnh gốc để có một mốc tham chiếu. Một cấu hình sẵn DMG gợi lại màn hình LCD phản xạ bốn tông màu của máy cầm tay nguyên bản, LCD Grid bổ sung cấu trúc điểm ảnh phụ, còn hiệu ứng CRT mang lại vẻ ngoài hoàn toàn khác. Bộ lọc nâng cao của Retropa thích ứng với vùng hiển thị thực tế thay vì đòi hỏi hệ số tỉ lệ nguyên, nhờ đó hình ảnh giữ đúng tỉ lệ trên mọi kích thước iPhone và iPad.",
        "points": [
          "Bộ lọc thay đổi cách hiển thị, không thay đổi độ phân giải của game.",
          "Bộ lọc không khắc phục được vấn đề tương thích của tệp tin.",
          "Hãy so sánh với hình ảnh gốc trước khi giữ lại một cấu hình sẵn."
        ]
      },
      {
        "title": "Khi việc nhập hoặc lưu game Game Boy gặp lỗi",
        "body": "Trước tiên hãy kiểm tra phần mở rộng tệp tin, hệ máy đã chọn và thông báo lỗi chính xác. Nếu ứng dụng Tệp tin chưa tải xong tệp gốc, hãy hoàn tất bước đó trước khi nhập lại. Dữ liệu lưu game của chính game và bản lưu trạng thái của trình giả lập là hai thứ khác nhau; đừng đổi tên thứ này thành thứ kia, và hãy sao lưu trước khi chuyển bản lưu giữa các nhân giả lập hoặc ứng dụng.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy, nhân giả lập và lỗi để gửi cho bộ phận hỗ trợ.",
          "Không đính kèm tệp tin ROM hay BIOS thương mại vào yêu cầu hỗ trợ.",
          "Hãy thử giao diện mặc định và một bộ lọc đơn giản khi cần khoanh vùng sự cố."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa có kèm theo game Game Boy không?",
        "answer": "Không. Retropa là trình giả lập và không cung cấp game hay tệp tin BIOS. Bạn chỉ nhập những tệp tin mình có quyền sử dụng, và chỉ những tệp đó."
      },
      {
        "id": "bios-needed",
        "question": "Giả lập Game Boy có cần tệp tin BIOS không?",
        "answer": "Các tựa game GB và GBC thường chạy được mà không cần tệp tin BIOS trong những nhân giả lập mà Retropa cung cấp. Nếu một nhân giả lập báo cần BIOS, hãy làm theo hướng dẫn hiện ra cho nhân đó thay vì nhập một tệp tin không liên quan."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Retropa có thể mở tệp tin .gbc như game Game Boy không?",
        "answer": "Tệp tin .gbc thuộc về Game Boy Color. Retropa chạy nó trên hệ máy tương ứng, và việc đổi tên phần mở rộng không làm thay đổi bản chất của tệp tin."
      }
    ],
    "related": [
      "gbc-emulator",
      "nes-emulator",
      "gba-emulator",
      "delta-alternative"
    ]
  },
  "gbc-emulator": {
    "kind": "system",
    "slug": "gbc-emulator",
    "label": "GBC",
    "title": "Trình giả lập Game Boy Color cho iPhone & iPad | Retropa",
    "description": "Chơi các game .gbc của bạn trên iPhone và iPad. Bảng màu, những tựa game chỉ dành cho GBC, cách chọn nhân giả lập, các bước nhập game và những kiểm tra cần thực hiện khi một game Game Boy Color không khởi động được.",
    "summary": "Retropa chơi các game Game Boy Color từ tệp tin .gbc của bạn, với khả năng xử lý bảng màu, chọn nhân giả lập theo từng game và các hiệu ứng hiển thị phù hợp với màn hình phản xạ nguyên bản.",
    "sections": [
      {
        "title": "Chuẩn bị một tệp tin .gbc",
        "body": "Game Game Boy Color dùng phần mở rộng .gbc. Retropa không kèm theo game hay tệp tin BIOS, vì vậy bạn hãy tự chuẩn bị tệp tin, giữ một bản sao dự phòng riêng, và chỉ nhập nội dung mà bạn có quyền sử dụng.",
        "points": [
          ".gbc là game Game Boy Color.",
          "Game Game Boy nguyên bản dùng .gb và cũng chạy được trên Retropa.",
          "Đừng đổi tên tệp tin .gb thành .gbc để ép hiển thị màu."
        ]
      },
      {
        "title": "Chọn nhân giả lập cho Game Boy Color",
        "body": "SameBoy là nhân giả lập tập trung vào GB và GBC, còn mGBA và SkyEmu cũng hỗ trợ Game Boy Color. Nếu một tựa game hiển thị sai màu hoặc sai nhịp thời gian, việc chuyển sang nhân giả lập khác là phép thử đầu tiên hợp lý, bởi mỗi nhân xử lý phần cứng theo cách hơi khác nhau.",
        "points": [
          "SameBoy là lựa chọn đầu tiên tự nhiên cho các tựa game GBC.",
          "mGBA hỗ trợ GB, GBC và GBA trong cùng một nhân giả lập.",
          "Lựa chọn nhân giả lập được lưu theo từng game."
        ]
      },
      {
        "title": "Nhập game và lần chạy đầu tiên",
        "body": "Hãy tải tệp tin về bộ nhớ máy để ứng dụng Tệp tin không còn phục vụ một bản giữ chỗ, sau đó chọn tệp từ mục nhập trong thư viện Retropa. Mở game và kiểm tra màu sắc, âm thanh cùng bố cục cảm ứng mặc định trước khi áp dụng giao diện hay bộ lọc, để sau này dễ xác định nguyên nhân nếu có vấn đề.",
        "points": [
          "Hãy thử một cảnh có sử dụng màu, không chỉ màn hình tiêu đề.",
          "Kiểm tra cả kênh âm thanh lẫn hình ảnh.",
          "Giữ nguyên tệp tin gốc trong suốt quá trình chẩn đoán."
        ]
      },
      {
        "title": "Hình ảnh và bố cục cho máy cầm tay màu",
        "body": "Màn hình Game Boy Color nhỏ và có tính phản xạ. Cấu hình sẵn LCD Grid bổ sung cấu trúc điểm ảnh phụ rất phù hợp, trong khi cấu hình sẵn DMG cố tình gợi lại tấm nền đơn sắc đời cũ. Bộ lọc nâng cao của Retropa hoạt động dựa trên vùng hiển thị thực tế thay vì một bội số nguyên cố định, nhờ đó tỉ lệ được giữ nguyên trên mọi kích thước thiết bị.",
        "points": [
          "So sánh từng cấu hình sẵn với hình ảnh gốc.",
          "Bộ lọc nâng cao cần có Retropa Plus.",
          "Kiểm tra rằng giao diện không che khuất vùng hiển thị game."
        ]
      },
      {
        "title": "Nút điều khiển và hướng màn hình",
        "body": "Bố cục Game Boy Color cần một D-pad, A và B, cùng Start và Select. Chế độ dọc phù hợp với những phiên chơi ngắn; chế độ ngang cho các nút bấm nhiều không gian hơn và có thể dễ chịu hơn trên iPhone lớn. Hãy xác nhận mọi nút đều có thể chạm tới ở hướng màn hình mà bạn thực sự chơi."
      },
      {
        "title": "Khi một game Game Boy Color không khởi động được",
        "body": "Trước tiên hãy kiểm tra phần mở rộng và hệ máy đã chọn, rồi đọc thông báo lỗi chính xác. Nếu vùng hoặc bảng màu có vẻ sai, hãy so sánh các nhân giả lập trước khi thay đổi cài đặt. Bản lưu tạo ra trên một nhân giả lập có thể không được nhân khác đọc, nên hãy sao lưu trước khi chuyển.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy, nhân giả lập và lỗi.",
          "Không gửi tệp tin ROM hay BIOS thương mại cho bộ phận hỗ trợ.",
          "Quay về giao diện mặc định và một bộ lọc đơn giản để khoanh vùng sự cố."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Game Game Boy Color có được kèm theo không?",
        "answer": "Không. Retropa là trình giả lập và không cung cấp game hay tệp tin BIOS. Chỉ nhập những tệp tin bạn có quyền sử dụng."
      },
      {
        "id": "gb-on-gbc",
        "question": "Tôi có thể chơi cả game Game Boy nguyên bản không?",
        "answer": "Có. Các tệp tin .gb của Game Boy nguyên bản cũng chạy được trên Retropa, với cùng những nhân giả lập xử lý Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Đổi tên tệp tin .gb thành .gbc có thêm màu không?",
        "answer": "Không. Phần mở rộng không làm thay đổi nội dung của tệp tin, nên việc đổi tên không kích hoạt các tính năng Game Boy Color."
      }
    ],
    "related": [
      "gb-emulator",
      "gba-emulator",
      "wonderswan-emulator"
    ]
  },
  "nes-emulator": {
    "kind": "system",
    "slug": "nes-emulator",
    "label": "NES",
    "title": "Trình giả lập NES cho iPhone & iPad | Retropa",
    "description": "Chạy các game NES của bạn trên iPhone và iPad. Các định dạng tệp tin được hỗ trợ gồm .nes, .fds và .nsf, cách chọn nhân giả lập, các bước nhập game, gán nút cho tay cầm và cách khắc phục sự cố.",
    "summary": "Retropa chạy các game NES từ tệp tin của bạn, bao gồm các định dạng âm thanh .nes, .fds và NSF trên hai nhân giả lập chuyên dụng, cùng tính năng gán nút cho tay cầm và hiệu ứng CRT.",
    "sections": [
      {
        "title": "Các định dạng tệp tin Retropa hỗ trợ cho NES",
        "body": "Khả năng hỗ trợ NES trong Retropa không chỉ gói gọn ở một phần mở rộng. Bên cạnh ảnh băng .nes phổ biến, các nhân giả lập còn nhận ảnh của Famicom Disk System và tệp tin âm thanh NSF, cùng hai biến thể vỏ chứa iNES thường và hợp nhất.",
        "points": [
          ".nes là ảnh băng NES tiêu chuẩn.",
          ".fds dành cho nội dung Famicom Disk System.",
          ".nsf và .nsfe là tệp tin âm thanh, không phải game chơi được.",
          "Có thể nhập và mở trực tiếp các vỏ chứa ZIP và RetroPack."
        ]
      },
      {
        "title": "Hai nhân giả lập, một hệ máy",
        "body": "Retropa cung cấp RusticoNES và TetaNES cho các tựa game NES, và JGenesis cũng hỗ trợ hệ máy này. Thử nhân giả lập thứ hai là cách nhanh nhất để phân biệt một tệp ROM khó chạy với một khác biệt giả lập thực sự, và lựa chọn được ghi nhớ theo từng game.",
        "points": [
          "RusticoNES là lựa chọn mặc định đáng tin cho các game băng.",
          "TetaNES là lựa chọn thay thế để thử khi có gì đó hoạt động bất thường.",
          "Tệp tin âm thanh NSF hoạt động khác với game ở mọi nhân giả lập."
        ]
      },
      {
        "title": "Nhập một game NES",
        "body": "Trước tiên hãy tải tệp tin về máy để ứng dụng Tệp tin không trả về một bản giữ chỗ, sau đó mở mục nhập trong thư viện Retropa. Khởi chạy game với bố cục mặc định và xác nhận hình ảnh, âm thanh cùng các nút bấm mặc định trước khi thay đổi giao diện hay bộ lọc."
      },
      {
        "title": "Xử lý tay cầm hai nút",
        "body": "Tay cầm NES được thiết kế tối giản có chủ đích: một D-pad, A, B, Start và Select. Trên màn hình cảm ứng, người dùng thường muốn đặt các nút gần nhau hơn, vì vậy hãy kiểm tra rằng thao tác chéo vẫn được nhận và Start cùng Select không bị bấm nhầm trong lúc chơi. Một tay cầm vật lý được ghép nối sẽ giải quyết phần lớn vấn đề này.",
        "points": [
          "Hãy ghép nối tay cầm trong iOS trước, rồi kiểm tra cách gán nút của nó trong Retropa.",
          "Kiểm tra cả các hướng chéo, không chỉ bốn hướng chính.",
          "Kiểm tra cả chế độ dọc lẫn chế độ ngang nếu bạn chơi ở cả hai."
        ]
      },
      {
        "title": "Hiển thị hình ảnh cho chuẩn",
        "body": "Tín hiệu hình ảnh của NES vốn dành cho tivi độ nét tiêu chuẩn, nên hiệu ứng CRT thường trông gần với trải nghiệm nguyên bản hơn là một lưới điểm ảnh sạch. Có sẵn các cấu hình sẵn Scanline và aperture-grille, và bộ lọc nâng cao của Retropa thích ứng với vùng hiển thị thực tế thay vì một bội số nguyên cố định.",
        "points": [
          "Hãy bắt đầu từ hình ảnh gốc làm mốc tham chiếu.",
          "Các lớp phủ scanline thông thường có thể bị nhấp nháy ở tỉ lệ không nguyên.",
          "Bộ lọc nâng cao cần có Retropa Plus."
        ]
      },
      {
        "title": "Khi một game NES không tải được",
        "body": "Hãy đọc thông báo lỗi chính xác trước khi thay đổi bất cứ điều gì. Một bản dump lỗi, một mapper không được hỗ trợ, một ảnh không có phần đầu hay một game đĩa thiếu BIOS là những vấn đề khác nhau. Hãy kiểm tra phần mở rộng và hệ máy đã chọn, rồi thử nhân giả lập NES còn lại.",
        "points": [
          "Ghi lại phiên bản ứng dụng, nhân giả lập và toàn bộ nội dung lỗi để gửi cho bộ phận hỗ trợ.",
          "Giữ nguyên tệp tin gốc trong suốt quá trình chẩn đoán.",
          "Không đính kèm tệp tin ROM hay BIOS thương mại vào yêu cầu hỗ trợ."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Retropa mở được những định dạng NES nào?",
        "answer": "Retropa nhận các tệp tin .nes, .fds, .nsf, .nsfe, .unf và .unif, đồng thời có thể mở trực tiếp vỏ chứa ZIP và RetroPack."
      },
      {
        "id": "nsf",
        "question": "Tôi có thể chơi tệp tin .nsf như một game không?",
        "answer": "Không. Tệp tin NSF là dữ liệu âm thanh, nên chúng phát âm thanh chứ không phải game. Hãy dùng tệp tin .nes hoặc .fds để chơi một tựa game."
      },
      {
        "id": "gamepad",
        "question": "Tay cầm vật lý có dùng được với game NES không?",
        "answer": "Có. Những tay cầm tương thích có thể được ghép nối với iOS và gán nút bên trong Retropa. Hãy kiểm tra cách gán nút sau khi ghép nối, vì thứ tự nút không phải lúc nào cũng như bạn mong đợi."
      }
    ],
    "related": [
      "snes-emulator",
      "gb-emulator",
      "arcade"
    ]
  },
  "snes-emulator": {
    "kind": "system",
    "slug": "snes-emulator",
    "label": "SNES",
    "title": "Trình giả lập SNES cho iPhone & iPad | Retropa",
    "description": "Chơi các game SNES của bạn trên iPhone và iPad. Các định dạng .sfc và .smc được hỗ trợ, nhân giả lập LakeSnes, cách gán nút cho tay cầm sáu nút và các bước khắc phục sự cố.",
    "summary": "Retropa chạy các game SNES từ tệp tin .sfc và .smc của bạn trên nhân giả lập LakeSnes, với tính năng gán nút cho tay cầm sáu nút, bản lưu trạng thái và hiệu ứng hiển thị CRT.",
    "sections": [
      {
        "title": "Các định dạng tệp tin SNES",
        "body": "Ảnh game Super Nintendo thường được phân phối dưới dạng .sfc hoặc .smc, và Retropa cũng nhận một số định dạng vỏ chứa và định dạng máy copy liên quan. Nếu một tệp tin không chạy, phần mở rộng là thứ đầu tiên cần kiểm tra, vì phần đầu không khớp là nguyên nhân phổ biến khiến game không khởi động được.",
        "points": [
          ".sfc và .smc là các ảnh SNES tiêu chuẩn.",
          "Retropa cũng liệt kê hỗ trợ cho .fig, .swc, .bs và .st.",
          "Có thể mở trực tiếp vỏ chứa ZIP và RetroPack."
        ]
      },
      {
        "title": "Nhân giả lập LakeSnes",
        "body": "Retropa chạy các tựa game SNES trên LakeSnes, và JGenesis cũng có hỗ trợ hệ máy này. Nếu một game cụ thể gặp vấn đề về nhịp thời gian hoặc đồ họa, hãy xác nhận tệp tin là một ảnh sạch trước khi cho rằng nhân giả lập có lỗi, và đối chiếu phiên bản ứng dụng hiện tại với ghi chú phát hành.",
        "points": [
          "LakeSnes là nhân giả lập chuyên dụng cho SNES.",
          "Một số tựa game phụ thuộc vào những bộ đồng xử lý riêng trên băng.",
          "Lựa chọn nhân giả lập theo từng game được ghi nhớ."
        ]
      },
      {
        "title": "Nhập game và lần chạy đầu tiên",
        "body": "Hãy giữ tệp tin trong bộ nhớ máy thay vì để nó thành bản giữ chỗ trên đám mây, sau đó chọn tệp từ mục nhập trong thư viện Retropa. Mở game và kiểm tra hình ảnh, âm thanh cùng các nút cảm ứng mặc định trước khi thay đổi bất kỳ cài đặt hiển thị nào, để những vấn đề về sau có nguyên nhân rõ ràng."
      },
      {
        "title": "Sáu nút cần không gian thực sự",
        "body": "Tay cầm SNES bổ sung X, Y, L và R bên cạnh D-pad, A, B, Start và Select, và nhiều game yêu cầu bấm đồng thời. Trên màn hình cảm ứng, việc trải bố cục theo chế độ ngang và kiểm tra từng tổ hợp là thời gian đáng bỏ ra. Một tay cầm vật lý được ghép nối là lựa chọn đáng tin cậy hơn cho các game hành động.",
        "points": [
          "Kiểm tra L và R, hai nút dễ bị bỏ sót khi gán nút.",
          "Thử một hướng chéo kết hợp với một nút vai cùng lúc.",
          "Kiểm tra rằng giao diện không che khuất vùng hiển thị game."
        ]
      },
      {
        "title": "Chọn hiệu ứng hiển thị",
        "body": "Đồ họa SNES được thiết kế cho màn hình CRT, nên các cấu hình sẵn Scanline và aperture-grille thường trông gần với bản gốc hơn là một lưới điểm ảnh thô. Bộ lọc nâng cao của Retropa tính đến vùng hiển thị thực tế thay vì đòi hỏi một bội số nguyên, điều này rất quan trọng trên điện thoại khi chiều cao khả dụng hiếm khi chia hết.",
        "points": [
          "Dùng hình ảnh gốc làm mốc chuẩn.",
          "Các lớp phủ scanline đơn giản có thể bị nhấp nháy ở tỉ lệ không nguyên.",
          "Bộ lọc nâng cao cần có Retropa Plus."
        ]
      },
      {
        "title": "Khi một game SNES không khởi động được",
        "body": "Hãy kiểm tra phần mở rộng, hệ máy đã chọn và nội dung lỗi chính xác. Những tựa game phụ thuộc vào một chip băng đặc biệt thường là nguyên nhân khi một game lỗi trong khi các game khác vẫn chạy. Hãy giữ nguyên tệp tin gốc trong lúc thử nghiệm, và thử chuyển sang nhân giả lập còn lại.",
        "points": [
          "Ghi lại phiên bản ứng dụng, nhân giả lập và lỗi để gửi cho bộ phận hỗ trợ.",
          "Việc đổi bộ lọc không khắc phục được vấn đề về chip băng.",
          "Không gửi tệp tin ROM hay BIOS thương mại cho bộ phận hỗ trợ."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": ".sfc hay .smc có quan trọng không?",
        "answer": "Cả hai đều là ảnh SNES tiêu chuẩn và Retropa nhận cả hai. Bản thân phần mở rộng không làm thay đổi game."
      },
      {
        "id": "chip-games",
        "question": "Vì sao một game lỗi trong khi các game khác vẫn chạy?",
        "answer": "Một số tựa game phụ thuộc vào phần cứng bổ sung trên băng. Nếu tệp tin là một ảnh sạch và các game khác vẫn chạy, sự phụ thuộc đó là nguyên nhân khả dĩ, và chuyển sang nhân giả lập khác là phép thử tiếp theo."
      },
      {
        "id": "saves",
        "question": "Bản lưu trạng thái có dùng được giữa các nhân giả lập không?",
        "answer": "Không đáng tin cậy. Bản lưu pin và bản lưu trạng thái là hai loại dữ liệu khác nhau, và một trạng thái do nhân giả lập này ghi có thể không tải được ở nhân khác, nên hãy sao lưu trước khi chuyển."
      }
    ],
    "related": [
      "nes-emulator",
      "sega-genesis-emulator",
      "arcade",
      "retropa-vs-delta"
    ]
  },
  "sega-genesis-emulator": {
    "kind": "system",
    "slug": "sega-genesis-emulator",
    "label": "Genesis",
    "title": "Trình giả lập Sega Genesis & Mega Drive cho iPhone | Retropa",
    "description": "Chơi các game Sega Genesis và Mega Drive của bạn trên iPhone và iPad. Các định dạng .md, .smd và .gen, nhân giả lập JGenesis, cách gán nút cho tay cầm sáu nút và khắc phục sự cố.",
    "summary": "Retropa chạy các game Sega Genesis và Mega Drive từ tệp tin của bạn trên nhân giả lập JGenesis, với hỗ trợ tay cầm sáu nút, bản lưu trạng thái và hiệu ứng hiển thị CRT.",
    "sections": [
      {
        "title": "Genesis và Mega Drive là cùng một hệ máy",
        "body": "Chiếc máy này được bán với tên Mega Drive ở châu Âu, Nhật Bản và phần lớn châu Á, còn ở Bắc Mỹ là Genesis. Phần cứng giống hệt nhau, nên tệp tin game dùng được theo cả hai tên; chỉ khác tên trên vỏ hộp. Retropa liệt kê cả hai, đó là lý do các phần mở rộng tệp tin hơi khác nhau giữa các khu vực.",
        "points": [
          ".md và .smd là các ảnh Mega Drive thông dụng.",
          ".gen là phần mở rộng phổ biến ở Bắc Mỹ.",
          "Phần mở rộng không làm thay đổi phần cứng mà game yêu cầu."
        ]
      },
      {
        "title": "Nhân giả lập JGenesis",
        "body": "Retropa chạy các tựa game Genesis và Mega Drive trên JGenesis, nhân giả lập này cũng hỗ trợ Master System, Game Gear và một số hệ máy cầm tay. Vì một nhân giả lập phục vụ nhiều nền tảng, hệ máy được chọn cho từng game rất quan trọng: nhập một tựa game Master System trong khi hệ máy đang đặt là Genesis là nguyên nhân gây nhầm lẫn phổ biến.",
        "points": [
          "JGenesis hỗ trợ MD, GEN, SMS và GG.",
          "Hãy xác nhận hệ máy được nhận diện trước khi báo lỗi.",
          "Lựa chọn nhân giả lập và hệ máy được ghi nhớ theo từng game."
        ]
      },
      {
        "title": "Nhập một game Mega Drive",
        "body": "Hãy lưu tệp tin trên máy thay vì để nó thành bản giữ chỗ trên đám mây, sau đó chọn tệp từ mục nhập trong thư viện Retropa. Mở game và xác nhận hình ảnh, âm thanh cùng bố cục cảm ứng mặc định trước khi áp dụng giao diện hay bộ lọc."
      },
      {
        "title": "Gán nút cho tay cầm sáu nút",
        "body": "Tay cầm Genesis có hai phiên bản ba nút và sáu nút, và một số game hoạt động khác đi tùy theo phiên bản được nhận diện. Trên bố cục cảm ứng, hãy xác nhận rằng A, B, C và, khi có, X, Y, Z cùng Mode đều có thể chạm tới, rồi thử một tổ hợp mà game thực sự sử dụng.",
        "points": [
          "Kiểm tra cả cách gán nút ba nút lẫn sáu nút.",
          "Kiểm tra Start, nút này cũng đóng vai trò tạm dừng trong nhiều tựa game.",
          "Một tay cầm vật lý được ghép nối giúp tránh phần lớn các lỗi bấm nhầm."
        ]
      },
      {
        "title": "Hiệu ứng hiển thị cho hệ máy 16-bit",
        "body": "Tín hiệu hình ảnh của Mega Drive hướng tới màn hình CRT, nên cấu hình sẵn Scanline hoặc aperture-grille thường trông gần với bản gốc hơn là một lưới điểm ảnh thô, đặc biệt với hiệu ứng pha trộn điểm ảnh mà tivi trước đây sẽ làm mịn. Bộ lọc nâng cao của Retropa hoạt động dựa trên vùng hiển thị thực tế thay vì một bội số nguyên cố định.",
        "points": [
          "Hãy bắt đầu từ hình ảnh gốc, rồi so sánh.",
          "Các mẫu pha trộn điểm ảnh là phép thử tốt cho một cấu hình bộ lọc.",
          "Bộ lọc nâng cao cần có Retropa Plus."
        ]
      },
      {
        "title": "Khi một game Genesis không khởi động được",
        "body": "Hãy kiểm tra phần mở rộng, lựa chọn hệ máy và thông báo lỗi chính xác. Sự không khớp về khu vực và hệ máy ở đây phổ biến hơn so với các hệ máy chỉ có một nền tảng, bởi một nhân giả lập phục vụ nhiều máy. Hãy giữ nguyên tệp tin gốc và xác nhận hệ máy được nhận diện trước khi thay đổi sâu hơn.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy được nhận diện, nhân giả lập và lỗi.",
          "Không gửi tệp tin ROM hay BIOS thương mại cho bộ phận hỗ trợ.",
          "Hãy giữ một bản sao dự phòng riêng trước khi chuyển bản lưu giữa các nhân giả lập."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive có phải là Genesis không?",
        "answer": "Đúng. Đó là một hệ máy với hai tên gọi theo khu vực, nên tệp tin game chạy được dưới cả hai tên."
      },
      {
        "id": "six-button",
        "question": "Retropa có hỗ trợ tay cầm sáu nút không?",
        "answer": "Bố cục cảm ứng và tính năng gán nút cho tay cầm ngoài đều bao phủ các nút bổ sung, và một số game thay đổi cách hoạt động tùy theo phiên bản tay cầm được nhận diện."
      },
      {
        "id": "system-detect",
        "question": "Vì sao game của tôi bị nhận diện sai hệ máy?",
        "answer": "Một nhân giả lập phục vụ nhiều nền tảng của Sega, nên hãy kiểm tra hệ máy được nhận diện cho game đó và sửa lại trước khi báo vấn đề tương thích."
      }
    ],
    "related": [
      "master-system-emulator",
      "game-gear-emulator",
      "snes-emulator"
    ]
  },
  "game-gear-emulator": {
    "kind": "system",
    "slug": "game-gear-emulator",
    "label": "Game Gear",
    "title": "Trình giả lập Game Gear cho iPhone & iPad | Retropa",
    "description": "Chơi game Game Gear .gg của riêng bạn trên iPhone và iPad. Nhân giả lập nào chạy chúng, cách nhập tệp tin, cách cấu hình màn hình và những gì cần kiểm tra khi game không chạy.",
    "summary": "Retropa chạy game Game Gear từ tệp tin .gg của riêng bạn thông qua nhân giả lập JGenesis, với giao diện màn hình có đèn nền, các bộ giao diện dạng máy cầm tay và khả năng gán nút đầy đủ.",
    "sections": [
      {
        "title": "Chuẩn bị tệp tin .gg",
        "body": "Game Game Gear dùng phần mở rộng .gg. Retropa không kèm theo game hay tệp tin BIOS, vì vậy hãy chuẩn bị sẵn tệp tin và giữ một bản sao bên ngoài ứng dụng trước khi nhập.",
        "points": [
          ".gg là phần mở rộng của Game Gear.",
          "Tệp tin .sms thuộc Master System, không phải Game Gear.",
          "Đổi tên tệp tin không chuyển đổi giữa hai hệ máy."
        ]
      },
      {
        "title": "Nhân giả lập nào phụ trách Game Gear",
        "body": "JGenesis đảm nhận Game Gear cùng với Mega Drive, Genesis và Master System. Vì một nhân giả lập phục vụ nhiều hệ máy Sega, hãy kiểm tra xem game có được nhận đúng là Game Gear không trước khi tìm hiểu nguyên nhân của vấn đề tương thích."
      },
      {
        "title": "Nhập và lần chạy đầu tiên",
        "body": "Hãy tải tệp tin về máy, sau đó chọn tệp tin từ mục nhập của thư viện Retropa. Kiểm tra hình ảnh, âm thanh và các nút bấm mặc định trước khi áp dụng giao diện, để mọi vấn đề về sau đều có nguyên nhân rõ ràng."
      },
      {
        "title": "Màn hình nhỏ có đèn nền",
        "body": "Màn hình Game Gear có đèn nền và kích thước nhỏ, nên cách xử lý LCD Grid thường phù hợp nhất, còn một cấu hình sẵn CRT mạnh sẽ trông nặng hơn rõ rệt so với máy gốc. Các bộ lọc nâng cao của Retropa thích ứng với vùng hiển thị thật thay vì đòi hỏi bội số nguyên.",
        "points": [
          "So sánh từng cấu hình sẵn với hình ảnh gốc.",
          "Bộ lọc nâng cao cần Retropa Plus.",
          "Kiểm tra xem giao diện có che mất vùng hiển thị game không."
        ]
      },
      {
        "title": "Nút bấm và hướng màn hình",
        "body": "Máy Game Gear có một nút điều hướng, hai nút hành động và nút Start. Số nút ít nên bố cục dọc khá thoải mái, nhưng hãy kiểm tra rằng nút Start nằm trong tầm với mà không phải đổi cách cầm, đồng thời thử cả các hướng chéo."
      },
      {
        "title": "Khi game Game Gear không chạy được",
        "body": "Hãy xác nhận phần mở rộng, hệ máy được nhận diện và nội dung thông báo lỗi chính xác. Tệp tin Master System được nhập dưới dạng Game Gear, hoặc ngược lại, là nguyên nhân thường gặp. Giữ nguyên tệp tin gốc trong lúc kiểm tra.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy được nhận diện, nhân giả lập và lỗi.",
          "Không gửi tệp tin ROM hay BIOS thương mại cho bộ phận hỗ trợ.",
          "Tạo bản sao lưu trước khi chuyển dữ liệu lưu game giữa các nhân giả lập."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear có phải là Master System không?",
        "answer": "Hai hệ máy có liên quan chặt chẽ với nhau nhưng vẫn khác nhau, với phần mở rộng tệp tin khác nhau. Một nhân giả lập chạy được cả hai, nên hãy kiểm tra xem tệp tin được nhận diện là hệ máy nào."
      },
      {
        "id": "bios",
        "question": "Game Gear có cần tệp tin BIOS không?",
        "answer": "Không cần với các nhân giả lập mà Retropa cung cấp. Nếu một nhân giả lập báo có yêu cầu, hãy làm theo hướng dẫn của nhân giả lập đó thay vì nhập một tệp tin không liên quan."
      }
    ],
    "related": [
      "master-system-emulator",
      "sega-genesis-emulator",
      "gb-emulator"
    ]
  },
  "master-system-emulator": {
    "kind": "system",
    "slug": "master-system-emulator",
    "label": "Master System",
    "title": "Trình giả lập Master System cho iPhone & iPad | Retropa",
    "description": "Chạy game Sega Master System .sms của riêng bạn trên iPhone và iPad. Phạm vi nhân giả lập, các bước nhập, bố cục nút bấm và những gì cần kiểm tra khi game không khởi động.",
    "summary": "Retropa chạy game Sega Master System từ tệp tin .sms của riêng bạn trên nhân giả lập JGenesis, với giao diện dạng máy cầm tay, các kiểu xử lý hiển thị và khả năng gán nút.",
    "sections": [
      {
        "title": "Chuẩn bị tệp tin .sms",
        "body": "Game Master System dùng phần mở rộng .sms. Retropa không cung cấp game hay tệp tin BIOS, vì vậy hãy chuẩn bị tệp tin và giữ một bản sao bên ngoài ứng dụng.",
        "points": [
          ".sms là phần mở rộng của Master System.",
          ".gg thuộc Game Gear và là một hệ máy khác.",
          "Có thể mở trực tiếp tệp tin nén ZIP và RetroPack."
        ]
      },
      {
        "title": "Phạm vi nhân giả lập",
        "body": "JGenesis đảm nhận Master System cùng với Mega Drive, Genesis và Game Gear. Vì một nhân giả lập phục vụ nhiều hệ máy, việc xác nhận hệ máy được nhận diện là bước chẩn đoán đầu tiên khi tệp tin hoạt động bất thường."
      },
      {
        "title": "Nhập và kiểm tra",
        "body": "Hãy để tệp tin trong bộ nhớ máy, sau đó chọn tệp tin từ mục nhập của thư viện Retropa. Kiểm tra hình ảnh, âm thanh và bố cục mặc định trước khi áp dụng giao diện hay cấu hình hiển thị sẵn."
      },
      {
        "title": "Hai nút bấm, một nút điều hướng",
        "body": "Tay cầm Master System dùng một nút điều hướng, hai nút hành động và, trên một số kiểu máy, một nút tạm dừng nằm ngay trên thân máy. Với bố cục cảm ứng, nên xác nhận rằng nút tạm dừng được gán ở vị trí dễ với tới, vì rất dễ bỏ sót nút này."
      },
      {
        "title": "Xử lý hình ảnh",
        "body": "Các game Master System được thiết kế cho màn hình CRT. Những cấu hình sẵn Scanline và lưới khẩu độ thường cho hình ảnh gần với bản gốc hơn lưới điểm ảnh thô, và các bộ lọc nâng cao của Retropa thích ứng với vùng hiển thị thật thay vì một bội số nguyên cố định.",
        "points": [
          "So sánh các cấu hình sẵn với hình ảnh gốc.",
          "Bộ lọc nâng cao cần Retropa Plus."
        ]
      },
      {
        "title": "Khi game Master System không khởi động được",
        "body": "Kiểm tra phần mở rộng, hệ máy được nhận diện và thông báo lỗi cụ thể. Khác biệt vùng và việc nhầm giữa Master System với Game Gear là những nguyên nhân thường gặp. Giữ nguyên tệp tin gốc trong lúc chẩn đoán.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy được nhận diện, nhân giả lập và lỗi.",
          "Không đính kèm tệp tin ROM hay BIOS thương mại vào yêu cầu hỗ trợ."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Làm sao biết một tệp tin là Master System hay Game Gear?",
        "answer": "Hãy xem phần mở rộng: .sms là Master System còn .gg là Game Gear. Retropa hiển thị hệ máy được nhận diện cho game đã nhập."
      },
      {
        "id": "pause",
        "question": "Nút tạm dừng nằm ở đâu?",
        "answer": "Trên máy gốc, nút này nằm trên thân máy chứ không phải trên tay cầm. Trong Retropa, nút này thuộc bố cục trên màn hình, nên hãy kiểm tra rằng nút đã được gán vào một phím bạn dễ với tới."
      }
    ],
    "related": [
      "game-gear-emulator",
      "sega-genesis-emulator",
      "nes-emulator"
    ]
  },
  "wonderswan-emulator": {
    "kind": "system",
    "slug": "wonderswan-emulator",
    "label": "WonderSwan",
    "title": "Trình giả lập WonderSwan cho iPhone & iPad | Retropa",
    "description": "Chơi game WonderSwan .ws của riêng bạn trên iPhone và iPad. Nhân giả lập Ares, hướng màn hình dọc, các bước nhập và cách xử lý sự cố với một máy cầm tay ít phổ biến.",
    "summary": "Retropa chạy game WonderSwan từ tệp tin .ws của riêng bạn trên nhân giả lập Ares, bao gồm cả hướng dọc mà phần cứng này được thiết kế để dùng.",
    "sections": [
      {
        "title": "Chuẩn bị tệp tin .ws",
        "body": "Game WonderSwan dùng phần mở rộng .ws, còn WonderSwan Color dùng .wsc. Retropa không kèm theo game hay tệp tin BIOS; hãy chuẩn bị tệp tin và giữ một bản sao lưu.",
        "points": [
          ".ws là WonderSwan; .wsc là WonderSwan Color.",
          "Hai hệ máy này khác nhau và có khả năng khác nhau.",
          "Đổi tên tệp tin không nâng cấp game lên bản máy màu."
        ]
      },
      {
        "title": "Nhân giả lập Ares",
        "body": "Ares đảm nhận WonderSwan và WonderSwan Color trong Retropa, cùng với các hệ máy cầm tay khác. Nếu một game không khởi động, hãy xác nhận tệp tin là bản hình sạch và hệ máy được nhận diện khớp với phần mở rộng tệp tin trước khi thay đổi cấu hình."
      },
      {
        "title": "Nhập và lần chạy đầu tiên",
        "body": "Lưu tệp tin trên máy, sau đó chọn tệp tin từ mục nhập của thư viện Retropa. Kiểm tra hình ảnh, âm thanh và các nút bấm mặc định trước khi áp dụng giao diện hay cấu hình hiển thị sẵn."
      },
      {
        "title": "Một máy cầm tay được thiết kế để cầm dọc",
        "body": "WonderSwan được thiết kế để hoạt động ở cả hai hướng, và nhiều game được xây dựng cho lối chơi dọc. Retropa hỗ trợ bố cục dọc, nên hãy kiểm tra xem game đang chơi có yêu cầu màn hình xoay không trước khi kết luận rằng hình ảnh bị sai.",
        "points": [
          "Thử cả bố cục dọc lẫn bố cục ngang.",
          "Không phải game nào cũng dùng cùng một hướng.",
          "Xác nhận mọi nút bấm đều với tới được ở hướng bạn chọn."
        ]
      },
      {
        "title": "Xử lý hiển thị",
        "body": "WonderSwan dùng màn hình đơn sắc phản xạ với cấu trúc điểm ảnh đặc trưng. Một cấu hình sẵn LCD Grid thường khớp nhất, còn cấu hình sẵn CRT sẽ trông nặng hơn máy gốc. Các bộ lọc nâng cao thích ứng với vùng hiển thị thật.",
        "points": [
          "Lấy hình ảnh gốc làm tham chiếu.",
          "Bộ lọc nâng cao cần Retropa Plus."
        ]
      },
      {
        "title": "Khi game WonderSwan không khởi động được",
        "body": "Kiểm tra phần mở rộng, hệ máy được nhận diện và thông báo lỗi chính xác. Cài tệp tin .wsc dưới dạng WonderSwan, hoặc ngược lại, là lỗi nhầm lẫn thường gặp. Giữ nguyên tệp tin gốc trong lúc kiểm tra.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy được nhận diện, nhân giả lập và lỗi.",
          "Không gửi tệp tin ROM hay BIOS thương mại cho bộ phận hỗ trợ."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Bản máy màu có làm thay đổi tệp tin không?",
        "answer": "Có. WonderSwan và WonderSwan Color dùng phần mở rộng khác nhau, và game bản màu có thể không hoạt động đúng trên hệ máy đơn sắc."
      },
      {
        "id": "orientation",
        "question": "Vì sao màn hình trông như bị xoay?",
        "answer": "Nhiều game WonderSwan được thiết kế cho lối chơi dọc. Hãy thử bố cục dọc trước khi cho rằng hình ảnh bị sai."
      }
    ],
    "related": [
      "gb-emulator",
      "gbc-emulator",
      "neogeo-pocket-emulator"
    ]
  },
  "neogeo-pocket-emulator": {
    "kind": "system",
    "slug": "neogeo-pocket-emulator",
    "label": "Neo Geo Pocket",
    "title": "Trình giả lập Neo Geo Pocket cho iPhone & iPad | Retropa",
    "description": "Chạy game Neo Geo Pocket .ngp và .ngpc của riêng bạn trên iPhone và iPad. Phạm vi nhân giả lập, bộ nút kiểu cần gạt và điểm khác biệt so với Neo Geo arcade.",
    "summary": "Retropa chạy game Neo Geo Pocket và Neo Geo Pocket Color từ tệp tin của riêng bạn trên nhân giả lập Ares, và tách biệt với giả lập Neo Geo arcade.",
    "sections": [
      {
        "title": "Neo Geo Pocket không phải Neo Geo arcade",
        "body": "Neo Geo Pocket và Neo Geo Pocket Color là máy cầm tay. Chúng dùng chung thương hiệu với phần cứng arcade Neo Geo MVS và AES nhưng là những hệ máy hoàn toàn khác nhau, với tệp tin và nhân giả lập khác nhau. Hỗ trợ arcade trong Retropa cần Plus; giả lập Pocket thì không.",
        "points": [
          ".ngp là Neo Geo Pocket; .ngpc và .ngc là bản máy màu.",
          "Tệp tin neogeo.zip của arcade không phải game Pocket.",
          "Thư viện arcade và thư viện Pocket là hai phần tách biệt."
        ]
      },
      {
        "title": "Chuẩn bị đúng tệp tin",
        "body": "Hãy kiểm tra phần mở rộng trước khi nhập. Game Pocket là một tệp hình duy nhất của máy cầm tay, trong khi một bộ arcade Neo Geo thường gồm nhiều tệp tin chip cùng một BIOS tùy chọn. Nhầm lẫn giữa hai loại này là lỗi phổ biến nhất với hệ máy này."
      },
      {
        "title": "Nhân giả lập Ares",
        "body": "Ares đảm nhận Neo Geo Pocket và Neo Geo Pocket Color cùng các hệ máy cầm tay khác trong Retropa. Nếu game không khởi động, hãy xác nhận phần mở rộng và hệ máy được nhận diện, rồi xem xét liệu tệp tin có phải bản hình sạch không."
      },
      {
        "title": "Cần gạt vi công tắc, không phải nút điều hướng",
        "body": "Neo Geo Pocket dùng cần gạt vi công tắc có tiếng tách thay vì nút điều hướng thông thường. Trên thực tế, điều này khiến độ chính xác của các hướng chéo quan trọng hơn bình thường, nên khi thử bố cục cảm ứng, hãy kiểm tra rằng thao tác chéo được ghi nhận rõ ràng chứ không chỉ kiểm tra bốn hướng chính.",
        "points": [
          "Thử riêng các hướng chéo.",
          "Xác nhận hai nút hành động thoải mái khi chơi lâu.",
          "Nên dùng tay cầm vật lý đã kết nối cho các game đối kháng."
        ]
      },
      {
        "title": "Xử lý hiển thị",
        "body": "Màn hình màu của Pocket nhỏ và có độ phân giải thấp, nên cách xử lý LCD nhẹ thường phù hợp hơn một cấu hình sẵn CRT nặng. Các bộ lọc nâng cao của Retropa hoạt động dựa trên vùng hiển thị thật thay vì đòi hỏi bội số nguyên.",
        "points": [
          "So sánh với hình ảnh gốc.",
          "Bộ lọc nâng cao cần Retropa Plus."
        ]
      },
      {
        "title": "Khi game Pocket không khởi động được",
        "body": "Xác nhận phần mở rộng, hệ máy được nhận diện và thông báo lỗi chính xác. Nếu trong thư viện có tệp tin arcade, hãy kiểm tra xem bạn có chọn nhầm một trong số đó không. Giữ nguyên tệp tin gốc trong lúc chẩn đoán.",
        "points": [
          "Ghi lại phiên bản ứng dụng, hệ máy được nhận diện, nhân giả lập và lỗi.",
          "Không gửi tệp tin ROM hay BIOS thương mại cho bộ phận hỗ trợ."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Tôi có thể chơi game arcade Neo Geo ở đây không?",
        "answer": "Đó là một hệ máy riêng với nhân giả lập và tệp tin riêng. Retropa hỗ trợ các dòng arcade, và những dòng này cần Retropa Plus; giả lập Neo Geo Pocket là phần tách biệt."
      },
      {
        "id": "neogeo-zip",
        "question": "Game Pocket có cần tệp tin neogeo.zip không?",
        "answer": "Không. Tệp tin đó liên quan đến phần cứng arcade Neo Geo. Game Pocket không dùng tệp tin này."
      }
    ],
    "related": [
      "neogeo-emulator",
      "wonderswan-emulator",
      "gbc-emulator"
    ]
  },
  "neogeo-emulator": {
    "kind": "system",
    "slug": "neogeo-emulator",
    "label": "Neo Geo",
    "title": "Trình giả lập Neo Geo cho iPhone & iPad | Retropa",
    "description": "Chơi các tệp tin arcade Neo Geo MVS được hỗ trợ trên iPhone và iPad cùng Retropa. Cấu trúc bộ tệp, yêu cầu BIOS, bộ gốc và bộ nhân bản, cùng những gì cần kiểm tra khi game không khởi động.",
    "summary": "Retropa chạy các bộ arcade Neo Geo được hỗ trợ trên iPhone và iPad với nút bấm cảm ứng, tay cầm ngoài và bộ lọc CRT. Chơi arcade cần Retropa Plus; game và tệp tin BIOS không được kèm theo.",
    "sections": [
      {
        "title": "Neo Geo arcade cần Plus",
        "body": "Giả lập arcade Neo Geo thuộc dòng arcade của Retropa, và các nhân giả lập arcade cần Retropa Plus. Phần này tách biệt với Neo Geo Pocket, một hệ máy cầm tay nằm trong hỗ trợ Pocket tiêu chuẩn.",
        "points": [
          "Các dòng arcade cần Retropa Plus.",
          "Neo Geo Pocket là một hệ máy cầm tay khác.",
          "Game và tệp tin BIOS đều không được kèm theo trong mọi trường hợp."
        ]
      },
      {
        "title": "Một bộ arcade không phải một tệp tin",
        "body": "Giả lập máy chơi game thường chỉ cần một tệp tin cho mỗi game. Phần cứng arcade hoạt động khác: một game là cả một bộ tệp tin chip, thường được gom trong tệp tin ZIP, và nhiều game phụ thuộc vào bộ gốc hoặc một BIOS. Vì thế tệp tin ZIP arcade hoạt động khác với ROM của máy cầm tay.",
        "points": [
          "Giữ nguyên tệp tin ZIP trừ khi quy trình nhập yêu cầu giải nén.",
          "Có thể cần thêm một tệp tin BIOS riêng.",
          "Bộ nhân bản có thể không chứa đủ mọi tệp tin mà nhân giả lập cần."
        ]
      },
      {
        "title": "Nhập và lần chạy đầu tiên",
        "body": "Chọn bộ tệp từ mục nhập của thư viện Retropa, rồi chạy bộ tệp với bố cục mặc định. Nếu nhân giả lập báo thiếu tệp tin hoặc thiếu BIOS, hãy đọc kỹ thông báo đó: thiếu bộ gốc và thiếu BIOS cần cách khắc phục khác nhau.",
        "points": [
          "Đọc thông báo lỗi chính xác trước khi thay đổi bất cứ điều gì.",
          "Giữ lại tệp tin nén gốc trong lúc chẩn đoán.",
          "Xác nhận nút thêm xu và nút Start đều với tới được."
        ]
      },
      {
        "title": "Tệp tin Neo Geo Pocket không dùng được ở đây",
        "body": "Nếu bạn có tệp tin .ngp hoặc .ngpc, chúng thuộc các hệ máy Pocket chứ không thuộc dòng arcade. ROM Pocket hay tệp tin ZIP đã đổi tên đều không thể thay thế cho một bộ arcade, và điều ngược lại cũng đúng.",
        "points": [
          ".ngp và .ngpc là tệp tin Pocket của máy cầm tay.",
          "Bộ arcade gồm nhiều tệp tin và có thể cần một BIOS.",
          "Kiểm tra hệ máy được nhận diện trước khi báo lỗi."
        ]
      },
      {
        "title": "Nút bấm và hiển thị của arcade",
        "body": "Phần cứng arcade cần một cần gạt cùng nhiều nút hành động, và nhiều game dựa vào việc nhấn đồng thời. Retropa hỗ trợ nút bấm trên màn hình và các tay cầm ngoài tương thích, đồng thời có những kiểu xử lý CRT phù hợp với hình ảnh arcade. Bộ lọc nâng cao cần Plus.",
        "points": [
          "Kết nối tay cầm trong iOS trước khi gán nút.",
          "Thử nhấn đồng thời một hướng chéo và một nút.",
          "Các cấu hình sẵn CRT thường phù hợp với hình ảnh arcade hơn lưới thô."
        ]
      },
      {
        "title": "Khi game Neo Geo không khởi động được",
        "body": "Hãy kiểm tra bo mạch đã chọn, nội dung bộ tệp và yêu cầu BIOS mà nhân giả lập báo. Một bộ nhân bản đứng riêng không có bộ gốc, hoặc một bộ thiếu tệp tin bắt buộc, sẽ không khởi động dù có áp dụng bộ lọc hay giao diện nào.",
        "points": [
          "Ghi lại phiên bản ứng dụng, bo mạch đã chọn, nhân giả lập và thông báo lỗi chính xác.",
          "Thay đổi bộ lọc hay giao diện không khắc phục được dữ liệu ROM còn thiếu.",
          "Không đính kèm tệp tin ROM hay BIOS thương mại vào yêu cầu hỗ trợ."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Vì sao các nhân giả lập arcade cần Plus?",
        "answer": "Các dòng arcade thuộc nhóm tính năng trả phí, cùng với giao diện cao cấp và bộ lọc nâng cao. Hệ máy Pocket và hệ máy dùng băng game thì không cần Plus."
      },
      {
        "id": "bios",
        "question": "Tôi có cần BIOS cho Neo Geo không?",
        "answer": "Nhiều bộ arcade yêu cầu BIOS, và nhân giả lập sẽ báo nếu thiếu. Hãy dùng BIOS mà bạn có quyền sử dụng; Retropa không cung cấp bản tải xuống."
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket có phải cùng một thứ không?",
        "answer": "Không. Pocket là một máy chơi game cầm tay với tệp tin riêng. Bộ arcade và game Pocket không thể thay thế cho nhau."
      }
    ],
    "related": [
      "neogeo-pocket-emulator",
      "arcade",
      "snes-emulator"
    ]
  },
  "mgba-core": {
    "kind": "core",
    "slug": "mgba-core",
    "label": "mGBA",
    "title": "Nhân giả lập mGBA trên iPhone & iPad | Retropa",
    "description": "Dùng mGBA trong Retropa cho Game Boy, Game Boy Color và Game Boy Advance. Xem định dạng trong danh mục, kiểm tra lần chạy đầu, lưu ý về bản lưu và cách đổi nhân giả lập với Retropa Plus.",
    "summary": "mGBA bao quát cả họ máy cầm tay Game Boy trong Retropa. Hãy bắt đầu với bố cục mặc định và hình ảnh gốc, rồi kiểm tra một cảnh chơi thật trước khi thay đổi các thiết lập hiển thị.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc mGBA: https://github.com/mgba-emu/mgba. Phạm vi dưới đây đến từ danh mục của Retropa, không phải danh sách đầy đủ tính năng của dự án gốc. Một phần mở rộng được liệt kê không bảo đảm tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn được phép sử dụng.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Lần chạy đầu trên các thế hệ máy cầm tay",
        "body": "Hãy tải tệp tin về máy trong ứng dụng Tệp, nhập tệp tin từ thư viện Retropa và xác nhận hệ máy được nhận diện. Một tựa Game Boy Color cần đúng đường xử lý phần cứng màu; đổi tên tệp tin không phải cách thêm hay bỏ tính năng màu. Với Game Boy Advance, hãy thử cả L và R cùng các nút hành động vì bố cục thiết kế cho các máy cầm tay đời cũ có thể bỏ sót chúng.",
        "points": [
          "Kiểm tra âm thanh và phản hồi sau màn hình tiêu đề.",
          "Thử giao diện mặc định trước khi nhập bố cục tùy chỉnh.",
          "Giữ tệp tin gốc bên ngoài ứng dụng."
        ]
      },
      {
        "title": "Tách biệt phần giả lập và hiệu ứng hiển thị",
        "body": "Nếu một cảnh trông sai, trước tiên hãy so sánh khi đã tắt bộ lọc. Cách xử lý màn hình xanh chủ ý đổi màu và lưới LCD chủ ý đổi diện mạo điểm ảnh. Những hiệu ứng đó không thể xác định liệu mGBA có đang hiển thị game sai hay không. Với vấn đề âm thanh hay nhịp thời gian, hãy ghi lại một cảnh lặp lại được và phiên bản ứng dụng thay vì chỉ đánh giá màn hình mở đầu."
      },
      {
        "title": "Đổi nhân giả lập và giữ tiến trình",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi bản thân hệ máy cầm tay vẫn dùng được mà không cần mua. Chỉ so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và bản lưu trạng thái của nhân giả lập gốc trước khi thử cùng một cảnh để so sánh khác biệt về âm thanh, hình ảnh và phản hồi.",
        "points": [
          "mGBA — Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "mGBA — Hãy sao lưu và kiểm tra cả bản lưu trong game; không có gì bảo đảm việc tự động chuyển đổi.",
          "mGBA — Đổi nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "Giới hạn trong phạm vi máy cầm tay",
        "body": "mGBA không phải đường xử lý Nintendo DS trong Retropa. Tệp tin DS cần nhân giả lập DS có trong danh mục, không phải một ảnh Game Boy Advance được đổi tên. Tương tự, bản lưu trạng thái từ trình giả lập khác không phải tệp tin game và không nên nhập như tệp tin game. Hãy làm theo lời nhắc BIOS của hệ máy đã chọn nếu lời nhắc xuất hiện; Retropa không cung cấp phần mềm hệ thống."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Tôi có thể đổi nhân giả lập chỉ cho một game không?",
        "answer": "Có, với Retropa Plus. Lựa chọn được lưu theo từng game, nhưng hãy sao lưu bản lưu trước khi đổi và đừng mong các bản lưu trạng thái hoạt động xuyên nhân giả lập."
      },
      {
        "id": "display",
        "question": "Một bộ lọc khác có khắc phục được vấn đề tương thích không?",
        "answer": "Không. Hãy thử với hình ảnh gốc trước. Bộ lọc thay đổi cách hiển thị, không thay đổi phần cứng được giả lập hay nội dung của tệp tin game."
      }
    ],
    "related": [
      "skyemu-core",
      "sameboy-core",
      "gb-emulator",
      "plus"
    ]
  },
  "skyemu-core": {
    "kind": "core",
    "slug": "skyemu-core",
    "label": "SkyEmu",
    "title": "Nhân giả lập SkyEmu trên iPhone & iPad | Retropa",
    "description": "SkyEmu bao quát họ Game Boy và nhánh beta Nintendo DS trong Retropa. Kiểm tra định dạng, điều khiển cảm ứng hai màn hình, giới hạn và việc đổi nhân giả lập với Retropa Plus.",
    "summary": "SkyEmu xử lý nhánh beta Nintendo DS cùng với các máy cầm tay Game Boy trong Retropa. Khả năng tương thích DS tùy từng tựa game, không phải lời hứa rằng mọi game hay tương tác cảm ứng đều hoạt động đúng.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc SkyEmu: https://github.com/skylersaleh/SkyEmu. Phạm vi dưới đây đến từ danh mục của Retropa, không phải danh sách đầy đủ tính năng của dự án gốc. Một phần mở rộng được liệt kê không bảo đảm tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn được phép sử dụng.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS trên SkyEmu",
        "body": "Hãy coi khả năng tương thích DS là tùy từng tựa game. Nhập một tệp tin đã tải về máy, xác nhận hệ máy được nhận diện là Nintendo DS và thử nghiệm vượt qua màn hình mở đầu. Kiểm tra một cảnh có điều khiển cảm ứng và một cảnh có âm thanh trước khi dựa vào một phiên chơi dài. Ghi lại phiên bản ứng dụng và lỗi chính xác nếu một tựa game bị đơ; đổi giao diện không thể sửa được vấn đề tương thích của nhân giả lập.",
        "points": [
          "Danh mục chỉ liệt kê SkyEmu cho Nintendo DS.",
          "Việc đổi nhân giả lập với Retropa Plus không tạo ra nhân giả lập DS thay thế.",
          "Hãy giữ bản sao lưu riêng trong khi thử các tựa game DS."
        ]
      },
      {
        "title": "Hai màn hình và điều khiển cảm ứng",
        "body": "Hãy chọn bố cục hiển thị cả hai màn hình. Kiểu dọc có thể xếp chúng theo chiều thẳng đứng; kiểu ngang phụ thuộc vào giao diện. Thử các điểm cảm ứng nhỏ ở đúng kích thước bạn thường chơi và xác minh màn hình nào nhận điều khiển cảm ứng. Tay cầm vật lý có thể xử lý các nút đã gán nhưng không thể thay thế mọi tương tác cảm ứng.",
        "points": [
          "Hãy thử cả hai màn hình thay vì chỉ màn hình game chính.",
          "Để các nút điều khiển cảm ứng trong tầm với khi dùng tay cầm ngoài.",
          "Giao diện máy cầm tay một màn hình không phải bố cục DS."
        ]
      },
      {
        "title": "Dùng SkyEmu cho các máy cầm tay đời cũ",
        "body": "Họ Game Boy dùng bố cục một màn hình. Hãy xác nhận hệ máy được nhận diện và dùng giao diện phù hợp trước khi tìm hiểu vấn đề về màu sắc hay thiếu nút. ZIP và RetroPack là vật chứa để nhập, không phải hệ máy được giả lập thêm; tệp tin bên trong vẫn phải khớp với danh mục. Đổi tên một tệp tin Game Boy Advance không biến nó thành game DS."
      },
      {
        "title": "Đổi nhân giả lập và giữ tiến trình",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi bản thân hệ máy cầm tay vẫn dùng được mà không cần mua. Chỉ so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và bản lưu trạng thái của nhân giả lập gốc trước khi thử cùng một cảnh để so sánh khác biệt về âm thanh, hình ảnh và phản hồi.",
        "points": [
          "SkyEmu — Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "SkyEmu — Hãy sao lưu và kiểm tra cả bản lưu trong game; không có gì bảo đảm việc tự động chuyển đổi.",
          "SkyEmu — Đổi nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Nhân giả lập nào chạy game Nintendo DS?",
        "answer": "SkyEmu là nhân giả lập được ghi trong danh mục của Retropa cho Nintendo DS. Khả năng tương thích tùy từng tựa game và danh mục không liệt kê nhân giả lập DS nào khác."
      },
      {
        "id": "touch",
        "question": "Game DS có còn cần điều khiển cảm ứng khi dùng tay cầm không?",
        "answer": "Có. Hãy để màn hình cảm ứng trong tầm với đối với game có sử dụng nó; tay cầm không thay thế được mọi thao tác cảm ứng."
      }
    ],
    "related": [
      "mgba-core",
      "ds-emulator",
      "game-wont-load",
      "plus"
    ]
  },
  "sameboy-core": {
    "kind": "core",
    "slug": "sameboy-core",
    "label": "SameBoy",
    "title": "Nhân giả lập SameBoy trên iPhone & iPad | Retropa",
    "description": "SameBoy tập trung vào Game Boy và Game Boy Color trong Retropa. Kiểm tra hành vi màu sắc, phạm vi tệp tin, giới hạn bản lưu trạng thái và yêu cầu Retropa Plus khi đổi nhân giả lập.",
    "summary": "SameBoy tập trung vào phần cứng Game Boy đơn sắc và màu đời đầu. Phạm vi hẹp hơn giúp nó trở thành điểm so sánh hữu ích, không phải bảo đảm rằng mọi nhân giả lập khác đều kém chính xác hơn.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc SameBoy: https://github.com/LIJI32/SameBoy. Phạm vi dưới đây đến từ danh mục của Retropa, không phải danh sách đầy đủ tính năng của dự án gốc. Một phần mở rộng được liệt kê không bảo đảm tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn được phép sử dụng.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Kiểm tra màu sắc khi không dùng bộ lọc",
        "body": "Hãy nhập tệp tin lưu trên máy và xác nhận Retropa nhận diện nó là Game Boy hay Game Boy Color. Bắt đầu với hình ảnh gốc: cách xử lý DMG có thể chủ ý làm một tựa game màu trông như đơn sắc. Dùng một cảnh có thay đổi màu đã biết và so sánh cùng cảnh đó thay vì hai thời điểm khác nhau trong game."
      },
      {
        "title": "Kiểm tra nhịp thời gian và phản hồi",
        "body": "Dùng giao diện mặc định để kiểm tra nút định hướng, A, B, Start và Select. Nếu nhịp thời gian hay âm thanh có vẻ sai, hãy ghi chính xác thời điểm xảy ra và liệu lỗi còn khi đã tắt hiệu ứng hiển thị. Với Retropa Plus, so sánh với một nhân giả lập tương thích khác có thể giúp khoanh vùng cách triển khai, nhưng chỉ một khác biệt nhìn thấy được không chứng minh nhân giả lập nào khớp với phần cứng."
      },
      {
        "title": "Đổi nhân giả lập và giữ tiến trình",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi bản thân hệ máy cầm tay vẫn dùng được mà không cần mua. Chỉ so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và bản lưu trạng thái của nhân giả lập gốc trước khi thử cùng một cảnh để so sánh khác biệt về âm thanh, hình ảnh và phản hồi.",
        "points": [
          "SameBoy — Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "SameBoy — Hãy sao lưu và kiểm tra cả bản lưu trong game; không có gì bảo đảm việc tự động chuyển đổi.",
          "SameBoy — Đổi nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "Không phải nhân giả lập Game Boy Advance",
        "body": "SameBoy không bao quát Game Boy Advance trong Retropa. Hãy dùng một nhân giả lập có trong danh mục hỗ trợ GBA cho ảnh GBA; đổi phần mở rộng không biến nó thành game Game Boy. Tương tự, chuyển sang SameBoy sẽ không làm bản lưu trạng thái do nhân giả lập khác tạo ra trở nên dùng chung được. Hãy giữ bản lưu trạng thái cũ và kiểm tra riêng bản sao lưu trong game."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy có chạy được game Game Boy Advance không?",
        "answer": "Không. Mục SameBoy trong danh mục Retropa bao quát Game Boy và Game Boy Color, không bao gồm Game Boy Advance."
      },
      {
        "id": "why",
        "question": "Khi nào tôi nên so sánh SameBoy với một nhân giả lập khác?",
        "answer": "Với Retropa Plus, hãy so sánh một vấn đề nhịp thời gian, màu sắc hay âm thanh lặp lại được sau khi kiểm tra tệp tin và tắt bộ lọc. Hãy sao lưu bản lưu trước."
      }
    ],
    "related": [
      "mgba-core",
      "gb-emulator",
      "gbc-emulator",
      "plus"
    ]
  },
  "rusticones-core": {
    "kind": "core",
    "slug": "rusticones-core",
    "label": "RusticoNES",
    "title": "Nhân giả lập RusticoNES cho NES trên iPhone & iPad | Retropa",
    "description": "RusticoNES trong Retropa: định dạng băng và đĩa NES / Famicom, kiểm tra bộ ánh xạ, lần chạy đầu, lưu ý về bản lưu và việc đổi nhân giả lập với Retropa Plus.",
    "summary": "RusticoNES là đường chạy NES mặc định của Retropa. Hãy dùng nó cho các định dạng NES / Famicom có trong danh mục, kiểm tra siêu dữ liệu băng và yêu cầu về đĩa trước khi coi việc khởi động thất bại là vấn đề hiển thị.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc RusticoNES: https://github.com/zeta0134/rustico. Phạm vi dưới đây đến từ danh mục của Retropa, không phải danh sách đầy đủ tính năng của dự án gốc. Một phần mở rộng được liệt kê không bảo đảm tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn được phép sử dụng.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Băng, UNIF và ảnh đĩa",
        "body": "Ảnh băng NES / Famicom và ảnh Famicom Disk System là hai loại đầu vào khác nhau. UNIF là một định dạng vật chứa băng, không phải tên gọi khác của phần đầu iNES. Hãy giữ nguyên phần đầu và phần mở rộng gốc khi nhập; đổi tên hay xóa byte để tệp tin trông giống định dạng khác có thể làm mất thông tin dùng để nhận diện bo mạch của nó.",
        "points": [
          "Giữ một bản sao riêng của ảnh gốc.",
          "Đọc mọi lời nhắc BIOS của hệ máy đĩa; Retropa không cung cấp BIOS.",
          "Các định dạng âm thanh NSF không được liệt kê cho RusticoNES; hãy kiểm tra TetaNES."
        ]
      },
      {
        "title": "Lần chạy đầu và kiểm tra tay cầm",
        "body": "Tải ảnh về máy trong ứng dụng Tệp, nhập ảnh qua thư viện Retropa và xác nhận hệ máy được nhận diện là NES. Bắt đầu với giao diện mặc định và không bật hiệu ứng hiển thị. Kiểm tra nút định hướng, A, B, Start và Select, kể cả các hướng chéo và thao tác nhấn đồng thời. Thiếu phản hồi trong một bố cục tùy chỉnh không phải bằng chứng cho thấy bộ ánh xạ có lỗi."
      },
      {
        "title": "Khi một băng thất bại nhưng các băng khác vẫn chạy",
        "body": "Băng NES có thể chứa phần cứng bộ ánh xạ khác nhau. Một phần mở rộng được nhận diện không chứng minh rằng bo mạch mà một game cụ thể dùng đã được triển khai. Hãy ghi lại lỗi chính xác và, nếu biết từ siêu dữ liệu ROM do bạn tự tạo, cả bộ ánh xạ và khu vực. Đừng vá phần đầu một cách ngẫu nhiên hay cho rằng BIOS sẽ sửa được vấn đề bo mạch băng. Với game đĩa, hãy phân biệt thiếu BIOS với thiếu dữ liệu đĩa."
      },
      {
        "title": "Đổi nhân giả lập và giữ tiến trình",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi bản thân hệ máy cầm tay vẫn dùng được mà không cần mua. Chỉ so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và bản lưu trạng thái của nhân giả lập gốc trước khi thử cùng một cảnh để so sánh khác biệt về âm thanh, hình ảnh và phản hồi.",
        "points": [
          "RusticoNES — Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "RusticoNES — Hãy sao lưu và kiểm tra cả bản lưu trong game; không có gì bảo đảm việc tự động chuyển đổi.",
          "RusticoNES — Đổi nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "Chỉ so sánh các định dạng trùng nhau",
        "body": "Trang hệ máy NES liệt kê hợp của các định dạng trên mọi nhân giả lập, không phải lời hứa rằng mọi nhân giả lập đều nhận tất cả. Trước khi dùng Retropa Plus để so sánh RusticoNES với TetaNES hay JGenesis, hãy kiểm tra cả hai mục trong danh mục cho định dạng của tệp tin gốc. Giữ nguyên cùng một cảnh và thiết lập hiển thị mặc định để giao diện hay bộ lọc bị đổi không che mất kết quả."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "RusticoNES có phải nhân giả lập được liệt kê cho âm thanh NSF không?",
        "answer": "Không. Danh mục của Retropa liệt kê NSF và NSFE thuộc TetaNES, không phải RusticoNES. Tệp tin âm thanh không phải game băng chơi được."
      },
      {
        "id": "mapper",
        "question": "Một phần mở rộng được hỗ trợ có bảo đảm game khởi động được không?",
        "answer": "Không. Bộ ánh xạ của băng, tính toàn vẹn của tệp tin và mọi yêu cầu của hệ máy đĩa vẫn quan trọng. Hãy ghi lại lỗi chính xác trước khi thay đổi tệp tin."
      }
    ],
    "related": [
      "nes-emulator",
      "tetanes-core",
      "jgenesis-core",
      "plus"
    ]
  },
  "tetanes-core": {
    "kind": "core",
    "slug": "tetanes-core",
    "label": "TetaNES",
    "title": "Nhân giả lập TetaNES cho NES trên iPhone & iPad | Retropa",
    "description": "TetaNES trong Retropa: game NES / Famicom, ảnh đĩa và âm thanh NSF, kiểm tra theo từng định dạng, thiết lập tay cầm và yêu cầu Retropa Plus khi đổi nhân giả lập.",
    "summary": "TetaNES là nhân giả lập NES thay thế trong Retropa với phạm vi được liệt kê trong danh mục gồm băng, đĩa và tệp tin nhạc. Hãy kiểm tra loại tệp tin bạn đã nhập trước khi mong có màn hình game chơi được.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc TetaNES: https://github.com/lukexor/tetanes. Phạm vi dưới đây đến từ danh mục của Retropa, không phải danh sách đầy đủ tính năng của dự án gốc. Một phần mở rộng được liệt kê không bảo đảm tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn được phép sử dụng.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Tệp tin nhạc không phải game băng",
        "body": "NSF và NSFE chứa dữ liệu nhạc NES. Nếu bạn đã nhập một tệp tin như vậy, việc không có màn chơi thông thường tự nó không phải lỗi. Hãy kiểm tra đầu ra âm thanh và các nút mà ứng dụng thực sự cung cấp; đừng cho rằng giao diện trình phát nhạc trên máy tính của dự án gốc có mặt trong Retropa. Để chơi game, hãy bắt đầu với một băng hoặc ảnh đĩa bạn được phép dùng.",
        "points": [
          "Kiểm tra âm lượng thiết bị và đầu ra âm thanh khi thử nhạc.",
          "Đổi tên tệp tin âm thanh không thể biến nó thành ảnh băng.",
          "Phần mở rộng UNIF thuộc mục danh mục của RusticoNES, không thuộc TetaNES."
        ]
      },
      {
        "title": "Nhập băng hoặc ảnh đĩa",
        "body": "Hãy tải tệp tin về thiết bị trước khi dùng mục nhập trong thư viện. Xác nhận hệ máy được nhận diện là NES và giữ nguyên ảnh gốc. Famicom là tên hệ máy của Nhật Bản; Famicom Disk System có thêm yêu cầu riêng về đĩa. Nếu nhân giả lập đã chọn báo lỗi BIOS hay dữ liệu đĩa, hãy giải quyết đúng yêu cầu đó thay vì thay tệp tin bằng một ảnh băng không liên quan."
      },
      {
        "title": "Kiểm tra phản hồi và một cảnh lặp lại được",
        "body": "Dùng bố cục NES / Famicom với nút định hướng, hai nút hành động, Start và Select. Xác nhận các hướng chéo với giao diện mặc định, rồi thử một cảnh thể hiện vấn đề. So sánh với hình ảnh gốc trước khi áp dụng hiệu ứng CRT: các dòng quét có thể đổi cảm nhận chi tiết mà không đổi thứ mà nhân giả lập mô phỏng."
      },
      {
        "title": "Đổi nhân giả lập và giữ tiến trình",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi bản thân hệ máy cầm tay vẫn dùng được mà không cần mua. Chỉ so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và bản lưu trạng thái của nhân giả lập gốc trước khi thử cùng một cảnh để so sánh khác biệt về âm thanh, hình ảnh và phản hồi.",
        "points": [
          "TetaNES — Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "TetaNES — Hãy sao lưu và kiểm tra cả bản lưu trong game; không có gì bảo đảm việc tự động chuyển đổi.",
          "TetaNES — Đổi nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "Một lựa chọn thay thế không phải cách sửa vạn năng",
        "body": "TetaNES và RusticoNES có danh sách định dạng và cách triển khai khác nhau. Việc đổi nhân giả lập chỉ có thể giúp khoanh vùng vấn đề nhịp thời gian hay bộ ánh xạ khi tệp tin hợp lệ với cả hai; nó không bảo đảm hỗ trợ một bo mạch cụ thể. Bản lưu trạng thái từ nhân giả lập trước nên được giữ sao lưu cùng nhân giả lập đó thay vì bị coi là tệp tin dùng chung."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Vì sao tệp tin NSF của tôi không hiện game chơi được?",
        "answer": "NSF là dữ liệu nhạc. Hãy kiểm tra âm thanh thay vì mong có màn chơi thông thường; dùng băng hoặc ảnh đĩa để chơi game."
      },
      {
        "id": "switch",
        "question": "Tôi có thể đổi game NES sang TetaNES mà không cần Retropa Plus không?",
        "answer": "Không. Việc đổi nhân giả lập cần có Retropa Plus. Hãy kiểm tra phạm vi định dạng của nhân giả lập đích và sao lưu tiến trình trước."
      }
    ],
    "related": [
      "nes-emulator",
      "rusticones-core",
      "game-wont-load",
      "plus"
    ]
  },
  "lakesnes-core": {
    "kind": "core",
    "slug": "lakesnes-core",
    "label": "LakeSnes",
    "title": "Nhân LakeSnes cho SNES trên iPhone & iPad | Retropa",
    "description": "LakeSnes trong Retropa: các định dạng SNES / Super Famicom, giới hạn chip băng game, điều khiển sáu nút, sao lưu bản lưu và chuyển nhân giả lập với Plus.",
    "summary": "LakeSnes là nhân giả lập của Retropa tập trung cho SNES. Danh mục của nhân này bao gồm nhiều định dạng ảnh ROM và định dạng máy copy, nhưng việc nhận diện tệp tin và việc hỗ trợ phần cứng băng game là hai vấn đề tách biệt.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc của LakeSnes: https://github.com/dinkc64/LakeSnes. Phạm vi hỗ trợ dưới đây lấy từ danh mục của Retropa, không phải danh sách tính năng đầy đủ của dự án gốc. Việc một phần mở rộng tệp tin có trong danh sách không bảo đảm khả năng tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn có quyền sử dụng.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Giữ nguyên tệp ảnh và phần header",
        "body": "SNES được biết đến với tên Super Famicom tại Nhật Bản. Các tệp ảnh băng game phổ biến dùng phần mở rộng SFC hoặc SMC; danh mục cũng liệt kê những định dạng máy copy và định dạng liên quan khác. Chỉ riêng phần mở rộng không chứng minh được tệp tin có header của máy copy hay cần phần cứng băng game đặc biệt. Hãy nhập tệp ảnh gốc đang lưu trên máy và giữ một bản sao lưu, thay vì gỡ header ngay từ bước đầu khi xử lý sự cố."
      },
      {
        "title": "Kiểm tra đầy đủ tay cầm",
        "body": "Sau khi nhập vào thư viện, hãy kiểm tra hệ máy được nhận diện và bắt đầu với bố cục mặc định. SNES bổ sung X, Y, L và R vào kiểu hai nút của máy cầm tay. Hãy thử các nút vai, các hướng chéo và một lần nhấn đồng thời mà game sử dụng; một giao diện đẹp nhưng thiếu L hoặc R có thể khiến game đang chạy tốt trông như bị kẹt.",
        "points": [
          "Hãy thử cả Start và Select cùng sáu nút điều khiển trong game.",
          "Hãy gán một tay cầm đã kết nối trước khi đánh giá những hạn chế của bố cục cảm ứng.",
          "Dùng hình ảnh gốc để phân biệt vấn đề nhập liệu và vấn đề hiển thị."
        ]
      },
      {
        "title": "Giới hạn của chip băng game và định dạng đặc biệt",
        "body": "Một số tựa game SNES phụ thuộc vào bộ xử lý bổ sung trên băng game hoặc phần cứng khác. Danh sách phần mở rộng trong danh mục không phải danh sách tương thích theo từng chip, và việc nhận diện được tệp tin BS hay ST không có nghĩa là mọi quy trình của phụ kiện đều được mở ra trong Retropa. Nếu chỉ một tựa game không chạy, hãy ghi lại yêu cầu phần cứng của nó khi biết được và thông báo lỗi chính xác. Đừng cho rằng một bộ lọc hay một phần mở rộng được đổi tên có thể bổ sung khả năng hỗ trợ phần cứng còn thiếu."
      },
      {
        "title": "Chuyển nhân giả lập và giữ tiến trình chơi",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi hệ máy cầm tay đó vẫn dùng được mà không cần mua. Chỉ nên so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và các bản lưu trạng thái của nhân gốc trước khi thử cùng một cảnh để so sánh âm thanh, hình ảnh và nhập liệu.",
        "points": [
          "Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "Cũng nên sao lưu và kiểm tra các bản lưu trong game; việc tự động chuyển đổi không được bảo đảm.",
          "Việc chuyển nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "So sánh LakeSnes với JGenesis",
        "body": "JGenesis cũng có SNES trong danh mục, nhưng phạm vi phần mở rộng SNES của nó hẹp hơn LakeSnes. Với Plus, chỉ nên so sánh một định dạng tệp tin mà cả hai mục đều liệt kê. Hãy quay lại đúng cảnh đó với cùng bộ điều khiển và không bật bộ lọc, đồng thời giữ riêng trạng thái của từng nhân giả lập. Một so sánh thành công với một băng game không chứng minh được khả năng tương thích cho mọi tựa game dùng chip đặc biệt."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Có phải mọi định dạng của LakeSnes đều chạy được trên JGenesis?",
        "answer": "Đừng cho là vậy. Hãy xem mục danh mục của từng nhân giả lập; các định dạng ở cấp hệ máy là sự kết hợp phạm vi hỗ trợ của nhiều nhân giả lập."
      },
      {
        "id": "chips",
        "question": "Danh sách định dạng có bảo đảm tương thích với chip đặc biệt không?",
        "answer": "Không. Việc nhận diện tệp tin và việc giả lập phần cứng băng game là hai chuyện tách biệt. Hãy kiểm tra thông báo lỗi chính xác và nhân giả lập đang chọn trước khi thay đổi tệp ảnh."
      }
    ],
    "related": [
      "snes-emulator",
      "jgenesis-core",
      "save-states-and-rewind",
      "plus"
    ]
  },
  "jgenesis-core": {
    "kind": "core",
    "slug": "jgenesis-core",
    "label": "JGenesis",
    "title": "Nhân JGenesis trên iPhone & iPad | Retropa",
    "description": "JGenesis trong Retropa: các hệ máy Sega và Nintendo có trong danh mục, tên gọi Genesis / Mega Drive, giới hạn định dạng, nhận diện hệ máy và chuyển nhân giả lập với Plus.",
    "summary": "JGenesis phục vụ nhiều hệ máy qua một họ nhân giả lập trong Retropa. Hệ máy được nhận diện vẫn quyết định phần cứng, bộ điều khiển và ngữ cảnh lưu game; dùng chung một nhân giả lập không làm cho các tệp tin thay thế được cho nhau.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc của JGenesis: https://github.com/jsgroth/jgenesis. Phạm vi hỗ trợ dưới đây lấy từ danh mục của Retropa, không phải danh sách tính năng đầy đủ của dự án gốc. Việc một phần mở rộng tệp tin có trong danh sách không bảo đảm khả năng tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn có quyền sử dụng.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "NES / Famicom: .nes",
          "SNES / Super Famicom: .sfc, .smc",
          "Sega Master System: .sms",
          "Game Gear: .gg",
          "Mega Drive: .md, .smd",
          "Genesis: .gen"
        ]
      },
      {
        "title": "Cách gọi tên Genesis và Mega Drive",
        "body": "Genesis là tên gọi tại Bắc Mỹ của hệ máy được biết đến với tên Mega Drive tại Nhật Bản và châu Âu. Danh mục của Retropa có mục dưới cả hai tên. Phần mở rộng tệp tin chỉ là manh mối về định dạng ảnh, không phải dấu hiệu đáng tin cậy để xác định khu vực: chỉ riêng tên tệp tin không cho biết yêu cầu về khu vực hay nhịp thời gian của game. Hãy giữ nguyên tệp tin gốc và xác nhận hệ máy được nhận diện, thay vì đổi tên tệp tin để chọn thị trường."
      },
      {
        "title": "Nhập đúng phần cứng",
        "body": "Hãy tải tệp ảnh về máy trong ứng dụng Tệp tin rồi nhập qua thư viện. Trước khi bắt đầu, cần phân biệt Master System với Game Gear, và NES / Famicom với SNES / Super Famicom. Một nhân giả lập đa hệ máy vẫn cần đúng đường dẫn phần cứng phù hợp. Nếu hệ máy được nhận diện không như mong đợi, hãy kiểm tra danh tính của tệp tin trước khi thay đổi cài đặt hiển thị hay tay cầm.",
        "points": [
          "Master System và Game Gear có liên quan với nhau nhưng không phải cùng một hệ máy.",
          "Danh sách định dạng theo hệ máy có thể bao gồm định dạng của những nhân giả lập khác.",
          "Phạm vi ở đây là danh mục của Retropa, không phải mọi tính năng của JGenesis gốc."
        ]
      },
      {
        "title": "Bộ điều khiển thay đổi theo hệ máy đã chọn",
        "body": "Với Genesis, hãy thử A, B, C và mọi nút bổ sung của kiểu sáu nút mà bố cục cung cấp. Với Game Gear, hãy kiểm tra nút Start; với Master System, hãy kiểm tra nút tạm dừng. Bố cục SNES cần các nút vai mà bố cục NES không có. Hãy kiểm chứng tổ hợp tay cầm trong một cảnh game thực tế trước khi cho rằng nhân giả lập đã bỏ sót một nút."
      },
      {
        "title": "Chuyển nhân giả lập và giữ tiến trình chơi",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi hệ máy cầm tay đó vẫn dùng được mà không cần mua. Chỉ nên so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và các bản lưu trạng thái của nhân gốc trước khi thử cùng một cảnh để so sánh âm thanh, hình ảnh và nhập liệu.",
        "points": [
          "Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "Cũng nên sao lưu và kiểm tra các bản lưu trong game; việc tự động chuyển đổi không được bảo đảm.",
          "Việc chuyển nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "Hỗ trợ Sega không có nghĩa là có nhân giả lập thay thế",
        "body": "Danh mục của Retropa ghi JGenesis là nhân giả lập duy nhất cho các hệ máy dùng băng game của Sega. Plus mở khóa tính năng chuyển nhân giả lập ở những nơi có lựa chọn thay thế; gói này không bổ sung một bản triển khai không có trong danh mục. Việc dự án gốc hỗ trợ nhiều hệ máy cũng không có nghĩa là CD, phần cứng mở rộng hay mọi tùy chọn trên máy tính đều có trong Retropa. Hãy dùng danh mục và các thông báo thực tế trong ứng dụng để xác định đường dẫn được hỗ trợ."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Phần mở rộng .gen có chứng minh game thuộc khu vực Bắc Mỹ không?",
        "answer": "Không. Genesis và Mega Drive là các tên gọi theo khu vực, nhưng phần mở rộng không xác định đáng tin cậy khu vực hay yêu cầu nhịp thời gian của game."
      },
      {
        "id": "upstream",
        "question": "Retropa có mở ra mọi hệ máy của JGenesis gốc không?",
        "answer": "Không có bảo đảm nào như vậy. Trang này lấy phạm vi hỗ trợ từ danh mục của chính Retropa, không phải danh sách tính năng đầy đủ của dự án gốc."
      }
    ],
    "related": [
      "sega-genesis-emulator",
      "master-system-emulator",
      "game-gear-emulator",
      "lakesnes-core",
      "plus"
    ]
  },
  "ares-core": {
    "kind": "core",
    "slug": "ares-core",
    "label": "Ares",
    "title": "Nhân Ares trên iPhone & iPad | Retropa",
    "description": "Ares trong Retropa: phạm vi GBA, WonderSwan và Neo Geo Pocket có trong danh mục, nhận diện phiên bản màu, bố cục xoay, lưu ý về bản lưu và chuyển nhân giả lập với Plus.",
    "summary": "Ares hỗ trợ một số dòng máy cầm tay được chọn trong Retropa. Phạm vi rộng của dự án gốc không có nghĩa là mọi hệ máy hay phụ kiện của dự án đó đều được tích hợp vào ứng dụng.",
    "sections": [
      {
        "title": "Hệ máy và định dạng trong danh mục",
        "body": "Dự án gốc của Ares: https://github.com/ares-emulator/ares. Phạm vi hỗ trợ dưới đây lấy từ danh mục của Retropa, không phải danh sách tính năng đầy đủ của dự án gốc. Việc một phần mở rộng tệp tin có trong danh sách không bảo đảm khả năng tương thích với mọi tựa game. Retropa không cung cấp game hay tệp tin BIOS; chỉ nhập những tệp tin bạn có quyền sử dụng.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Chọn đúng phiên bản đơn sắc hay màu",
        "body": "Hãy nhập tệp ảnh đã tải về máy và kiểm tra xem Retropa nhận diện WonderSwan gốc hay WonderSwan Color, và Neo Geo Pocket hay Neo Geo Pocket Color. Các phiên bản màu có những khả năng mà phần cứng đơn sắc không có. Đổi tên tệp tin không phải là chuyển đổi và không thể khiến một tựa game chỉ dành cho máy màu chạy như game của máy gốc.",
        "points": [
          "Giữ tệp ảnh gốc và một bản sao lưu tiến trình riêng.",
          "Kiểm tra phiên bản được nhận diện trước khi chẩn đoán vấn đề bảng màu.",
          "Hãy làm theo hướng dẫn về firmware riêng của hệ máy nếu có; Retropa không cung cấp BIOS."
        ]
      },
      {
        "title": "Hướng màn hình WonderSwan không chỉ cần kiểu dọc",
        "body": "Game WonderSwan có thể được thiết kế để chơi theo chiều ngang hoặc chiều dọc. Hãy kiểm tra hướng chơi mà game yêu cầu, cả hai cụm nút điều hướng và bố cục giao diện hiện có. Chỉ xoay điện thoại sang kiểu dọc không chứng minh được rằng màn hình giả lập và mọi nút bấm đã được xoay đúng. Nếu một bố cục không thể hiện đủ các nút cần thiết, hãy dùng bố cục phù hợp khác thay vì cho rằng nhân giả lập có thể tự gán lại chúng."
      },
      {
        "title": "Pocket không phải Neo Geo arcade",
        "body": "Neo Geo Pocket dùng tệp ảnh của máy cầm tay, không dùng bộ arcade nhiều tệp tin gắn với Neo Geo MVS. Một tệp lưu trữ BIOS arcade không thể thay thế cho tệp ảnh Pocket. Hãy thử các hướng chéo và cả hai nút hành động với bố cục mặc định. Màn hình Pocket gốc là đơn sắc; chỉ Pocket Color mới được mong đợi hiển thị đồ họa của phiên bản màu. Việc chạy game arcade là một khả năng riêng của Plus."
      },
      {
        "title": "Chuyển nhân giả lập và giữ tiến trình chơi",
        "body": "Việc đổi nhân giả lập cần có Retropa Plus, ngay cả khi hệ máy cầm tay đó vẫn dùng được mà không cần mua. Chỉ nên so sánh những nhân giả lập hỗ trợ cả hệ máy lẫn định dạng tệp tin. Lựa chọn được ghi nhớ theo từng game; hãy sao lưu bản lưu của chính game và các bản lưu trạng thái của nhân gốc trước khi thử cùng một cảnh để so sánh âm thanh, hình ảnh và nhập liệu.",
        "points": [
          "Bản lưu trạng thái ghi lại trạng thái nội bộ của một nhân giả lập cụ thể; đừng mong chúng tương thích giữa các nhân giả lập.",
          "Cũng nên sao lưu và kiểm tra các bản lưu trong game; việc tự động chuyển đổi không được bảo đảm.",
          "Việc chuyển nhân giả lập không chuyển đổi tệp tin game cũng không cung cấp BIOS còn thiếu."
        ]
      },
      {
        "title": "Nơi có và không có lựa chọn để so sánh",
        "body": "Danh mục liệt kê lựa chọn thay thế cho Game Boy Advance, nhưng chỉ liệt kê Ares cho các phiên bản WonderSwan và Neo Geo Pocket. Tính năng chuyển nhân giả lập của Plus không bổ sung một bản triển khai khác cho những hệ máy đó. Ares còn có phạm vi ở dự án gốc rộng hơn nhiều so với phần tích hợp này; chỉ nên dùng phạm vi hỗ trợ của Retropa được liệt kê tại đây, thay vì cho rằng có thể bật một hệ máy khác của dự án gốc bằng cách đổi phần mở rộng."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Phần hỗ trợ Pocket của Ares có chạy được bộ arcade Neo Geo của tôi không?",
        "answer": "Không. Pocket và arcade Neo Geo là hai dòng phần cứng khác nhau với yêu cầu tệp tin khác nhau. Chạy game arcade cần có Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Plus có bổ sung thêm nhân giả lập WonderSwan hay Pocket không?",
        "answer": "Không. Những hệ máy đó hiện chỉ có Ares trong danh mục của Retropa. Việc chuyển nhân giả lập chỉ áp dụng khi tồn tại một lựa chọn thay thế tương thích."
      }
    ],
    "related": [
      "wonderswan-emulator",
      "neogeo-pocket-emulator",
      "gba-emulator",
      "plus"
    ]
  },
  "delta-alternative": {
    "kind": "compare",
    "slug": "delta-alternative",
    "label": "Thay thế Delta",
    "title": "Phương án thay thế trình giả lập Delta trên iPhone & iPad | Retropa",
    "description": "Bạn đang tìm phương án thay thế Delta trên iPhone và iPad? Hãy so sánh khả năng hỗ trợ arcade, nhập giao diện Delta, bộ lọc hiển thị và chế độ console, kể cả những điểm mà Delta mạnh hơn.",
    "summary": "Retropa là trình giả lập arcade và máy cầm tay cho iPhone và iPad, nhập trực tiếp giao diện Delta, bổ sung các dòng arcade cùng bộ lọc hiển thị không theo tỉ lệ số nguyên, và giữ giao diện ưu tiên máy cầm tay.",
    "sections": [
      {
        "title": "Những gì giữ lại được từ Delta",
        "body": "Chuyển sang trình giả lập khác chỉ đáng làm khi thiết lập hiện tại vẫn dùng được. Retropa nhập được các gói .deltaskin của Delta, nên bố cục bạn đã chỉnh sẵn không phải dựng lại từ đầu. Hãy kiểm tra xem gói đó hướng đến hệ máy và hướng màn hình bạn chơi, rồi xác nhận rằng vùng hiển thị game không bị che khuất.",
        "points": [
          "Gói .deltaskin được nhập trực tiếp.",
          "Kiểm tra hệ máy mà giao diện hướng đến trước khi dùng nó.",
          "Khả năng hỗ trợ kiểu ngang và kiểu dọc phụ thuộc vào từng gói."
        ]
      },
      {
        "title": "Những điểm Retropa bổ sung mà Delta không có",
        "body": "Khác biệt rõ nhất là khả năng hỗ trợ arcade. Retropa chạy các dòng arcade được hỗ trợ gồm CPS I, CPS II, CPS III, Neo Geo, PGM và M92 song song với các hệ máy cầm tay, nên chỉ một thư viện là đủ cho cả hai. Nhân giả lập arcade cần có Retropa Plus, và game cùng tệp tin BIOS không được bao gồm.",
        "points": [
          "Các dòng arcade nằm chung thư viện với máy cầm tay.",
          "Nhân giả lập arcade cần có Retropa Plus.",
          "Bộ arcade gồm nhiều tệp tin và có thể cần BIOS."
        ]
      },
      {
        "title": "Bộ lọc hiển thị không cần tỉ lệ số nguyên",
        "body": "Nhiều bộ lọc retro giả định hình ảnh game khớp với một số nguyên điểm ảnh trên màn hình. Trên iPhone hiện đại, vùng hiển thị sẵn có hiếm khi chia hết, để lại khoảng trống hoặc các dòng quét không đều. Bộ lọc nâng cao của Retropa thay vào đó hoạt động dựa trên vùng xuất thực tế, ở mọi hướng màn hình và bố cục giao diện. Ứng dụng iOS là bản tham chiếu; bản xem trước trên trình duyệt tại trang này chỉ là bản gần đúng.",
        "points": [
          "Bộ lọc thay đổi cách hiển thị, không thay đổi độ phân giải game.",
          "Bộ lọc nâng cao cần có Retropa Plus.",
          "Lớp phủ dòng quét thông thường có thể bị nhấp nháy ở tỉ lệ không nguyên."
        ]
      },
      {
        "title": "Khi Delta là lựa chọn mạnh hơn",
        "body": "Delta có lượng người dùng lớn hơn nhiều, thời gian có mặt lâu hơn trên App Store và cộng đồng giao diện được chia sẻ rộng hơn. Nếu bạn muốn lựa chọn được dùng phổ biến nhất, kho giao diện sẵn có phong phú nhất hay nhiều hướng dẫn từ bên thứ ba nhất, Delta là lựa chọn hợp lý và trang này không giả vờ điều ngược lại.",
        "points": [
          "Delta có cộng đồng lớn hơn và nhiều nội dung từ bên thứ ba hơn.",
          "Delta hưởng lợi từ hiệu ứng mạng lưới xoay quanh giao diện.",
          "Retropa là sản phẩm mới hơn với danh mục nhỏ hơn."
        ]
      },
      {
        "title": "Dùng thử cả hai không tốn gì",
        "body": "Cả hai ứng dụng đều miễn phí tải về, có tùy chọn mua trong ứng dụng. Cách thiết thực là nhập một giao diện Delta vào Retropa, chạy thử một game cầm tay và một bộ arcade, rồi quyết định dựa trên cảm nhận thực tế về tay cầm và hình ảnh trên thiết bị của bạn.",
        "points": [
          "Cả hai đều miễn phí tải về.",
          "Dù chọn thế nào, hãy giữ tệp tin và giao diện gốc.",
          "Hãy đánh giá trên chính thiết bị của bạn, không dựa vào bảng so sánh."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Retropa có nhập được giao diện Delta tôi đang dùng không?",
        "answer": "Có. Retropa nhập được các gói .deltaskin. Hãy giữ tệp gói gốc và kiểm tra xem gói đó hướng đến hệ máy và hướng màn hình bạn chơi."
      },
      {
        "id": "free",
        "question": "Retropa có miễn phí không?",
        "answer": "Retropa miễn phí tải về, có tùy chọn mua trong ứng dụng. Nhân giả lập arcade, giao diện cao cấp và bộ lọc nâng cao cần có Retropa Plus. Giá được hiển thị trong ứng dụng."
      },
      {
        "id": "roms",
        "question": "Retropa có kèm game không?",
        "answer": "Không. Retropa là trình giả lập và không cung cấp game hay tệp tin BIOS. Chỉ nhập nội dung bạn có quyền sử dụng."
      },
      {
        "id": "which-better",
        "question": "Trình giả lập nào tốt hơn?",
        "answer": "Mỗi ứng dụng tối ưu cho những mục tiêu khác nhau. Delta có cộng đồng và kho giao diện lớn hơn; Retropa bổ sung các dòng arcade, bộ lọc không theo tỉ lệ số nguyên và khả năng nhập giao diện Delta. Hãy thử cả hai trên chính thiết bị của bạn."
      }
    ],
    "attribution": "Delta là sản phẩm của bên thứ ba. Mọi tên sản phẩm và công ty được nhắc đến trên trang này đều là nhãn hiệu của chủ sở hữu tương ứng, và việc sử dụng tại đây chỉ nhằm mục đích nhận diện và so sánh thực tế. Retropa không liên kết, không được chứng thực và không được tài trợ bởi bất kỳ bên nào nêu trên.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "So sánh Retropa và Delta",
    "title": "Retropa so với Delta: so sánh Arcade, Bộ lọc & Giao diện",
    "description": "So sánh trực tiếp Retropa và Delta trên iPhone và iPad: các hệ máy được giả lập, hỗ trợ arcade, tương thích giao diện, bộ lọc hiển thị và trường hợp mỗi ứng dụng phù hợp hơn.",
    "summary": "Retropa và Delta đều là trình giả lập iOS, nhưng tối ưu theo cách khác nhau: Delta có cộng đồng và kho giao diện lớn hơn, còn Retropa bổ sung các dòng arcade cùng bộ lọc hiển thị không theo tỉ lệ số nguyên.",
    "sections": [
      {
        "title": "Các hệ máy được giả lập",
        "body": "Cả hai ứng dụng đều hỗ trợ những hệ máy cầm tay mà phần lớn người chơi mong muốn. Retropa còn chạy được các dòng arcade được hỗ trợ, và đây là khác biệt lớn nhất về tính năng. Nhân giả lập arcade cần có Retropa Plus; các hệ máy cầm tay thì không.",
        "points": [
          "Phạm vi hỗ trợ máy cầm tay trùng nhau khá nhiều.",
          "Các dòng arcade là đặc trưng riêng của Retropa.",
          "Chơi game arcade cần có Plus."
        ]
      },
      {
        "title": "Giao diện và bố cục",
        "body": "Retropa nhập được các gói .deltaskin của Delta, nên bố cục bạn đang dùng có thể chuyển sang. Ngoài ra, hệ sinh thái giao diện được chia sẻ của Delta lớn hơn, điều này quan trọng nếu bạn muốn có một kho lớn để tha hồ tìm hiểu.",
        "points": [
          "Retropa nhập được các gói .deltaskin.",
          "Delta có danh mục được chia sẻ lớn hơn.",
          "Luôn kiểm tra xem gói có hỗ trợ hệ máy và hướng màn hình của bạn không."
        ]
      },
      {
        "title": "Bộ lọc hiển thị",
        "body": "Retropa cung cấp bộ lọc CRT và LCD nâng cao, thích ứng với vùng xuất thực tế thay vì đòi hỏi tỉ lệ số nguyên, và có thể dùng chuỗi shader của RetroArch, bao gồm các preset .slang và .slangp. Bộ lọc nâng cao cần có Plus. Bản xem trước trên website chỉ là bản gần đúng; ứng dụng iOS là bản tham chiếu.",
        "points": [
          "Bộ lọc nâng cao không đòi hỏi tỉ lệ số nguyên.",
          "Khả năng hỗ trợ chuỗi shader của RetroArch được liệt kê cho Retropa.",
          "Bộ lọc nâng cao cần có Plus."
        ]
      },
      {
        "title": "Cộng đồng, tài liệu và thời gian hoạt động",
        "body": "Delta có mặt trên App Store lâu hơn, có lượng người dùng nhiều hơn hẳn và vì thế cũng có nhiều tài liệu cộng đồng, câu trả lời trên diễn đàn và hướng dẫn từ bên thứ ba hơn hẳn. Retropa mới hơn và nhỏ hơn. Bất kỳ ai nói khác đều không mô tả đúng tình trạng hiện tại của cả hai sản phẩm.",
        "points": [
          "Delta có lịch sử lâu hơn trên App Store.",
          "Delta có nhiều câu trả lời từ cộng đồng hơn.",
          "Retropa hiện có lượng người dùng nhỏ hơn."
        ]
      },
      {
        "title": "Cách lựa chọn",
        "body": "Nếu bạn quan tâm đến các tựa game arcade, hoặc muốn bộ lọc hiển thị không giả định tỉ lệ số nguyên, Retropa đáng để cài đặt. Nếu bạn muốn kho giao diện lớn nhất và nhiều nội dung cộng đồng nhất, Delta là lựa chọn an toàn hơn. Cả hai đều miễn phí tải về, nên lời khuyên chân thành là hãy thử cả hai với tệp tin của chính bạn.",
        "points": [
          "Cả hai đều miễn phí tải về.",
          "Không cần cam kết gì để dùng thử cả hai.",
          "Cả hai đều yêu cầu bạn tự cung cấp tệp tin game."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta có hỗ trợ game arcade không?",
        "answer": "Trang này không thể xác minh được sự so sánh đó. Điều trang này có thể nêu là Retropa chạy được các dòng arcade được hỗ trợ gồm CPS, Neo Geo, PGM và M92, và nhân giả lập arcade cần có Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Tôi có thể dùng cùng một giao diện cho cả hai không?",
        "answer": "Retropa nhập được các gói .deltaskin của Delta, nên gói dùng được trong Delta thường cũng nhập được vào Retropa. Hãy kiểm tra hệ máy và hướng màn hình mục tiêu sau khi nhập."
      },
      {
        "id": "price",
        "question": "Hai ứng dụng này tốn bao nhiêu?",
        "answer": "Retropa miễn phí tải về, có tùy chọn mua trong ứng dụng. Retropa Plus là cần thiết cho nhân giả lập arcade, giao diện cao cấp và bộ lọc nâng cao. Giá hiện tại được hiển thị trong ứng dụng."
      }
    ],
    "attribution": "Delta là sản phẩm của bên thứ ba. Mọi tên sản phẩm và công ty được nhắc đến trên trang này đều là nhãn hiệu của chủ sở hữu tương ứng, và việc sử dụng tại đây chỉ nhằm mục đích nhận diện và so sánh thực tế. Retropa không liên kết, không được chứng thực và không được tài trợ bởi bất kỳ bên nào nêu trên.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Nhập trò chơi",
    "title": "Cách nhập game vào Retropa trên iPhone & iPad",
    "description": "Nhập tệp tin game của bạn vào Retropa trên iPhone và iPad: mục Nhập nằm ở đâu, vì sao bản giữ chỗ trên đám mây gây lỗi, định dạng nào dùng được và cần làm gì khi tệp tin bị từ chối.",
    "summary": "Hướng dẫn từng bước cách nhập tệp tin game của bạn vào Retropa, gồm những định dạng dùng được, cách tệp tin chứa ZIP hoạt động và cách khắc phục khi nhập thất bại.",
    "sections": [
      {
        "title": "Trước khi bắt đầu",
        "body": "Retropa không kèm theo game hay tệp tin BIOS. Bạn cần một tệp tin game mà bạn có quyền sử dụng, được lưu ngay trên thiết bị. Hãy giữ một bản sao nguyên vẹn bên ngoài ứng dụng để một sai sót khi nhập không bao giờ khiến bạn mất bản gốc.",
        "points": [
          "Chỉ nhập nội dung mà bạn có quyền sử dụng.",
          "Giữ một bản sao lưu riêng cho mọi tệp tin gốc.",
          "Ứng dụng miễn phí tải về; game không được cung cấp sẵn."
        ]
      },
      {
        "title": "Bước một: đưa tệp tin vào thiết bị",
        "body": "Hãy tải tệp tin để nó nằm trong bộ nhớ của máy, không phải dưới dạng bản giữ chỗ trên đám mây. Đây là nguyên nhân phổ biến nhất khiến việc nhập thất bại: ứng dụng Tệp tin vẫn hiển thị mục đó, nhưng dữ liệu chưa thực sự nằm trên thiết bị, nên trình giả lập không nhận được gì dùng được.",
        "points": [
          "Mở tệp tin một lần trong Tệp tin để xác nhận đã tải xong.",
          "Tệp tin bị làm mờ hoặc vẫn cần tải về chính là bản giữ chỗ.",
          "Hoàn tất việc tải về trước khi nhập."
        ]
      },
      {
        "title": "Bước hai: nhập từ thư viện",
        "body": "Mở mục Nhập trong thư viện Retropa và chọn tệp tin. Kiểm tra xem hệ máy đã được nhận diện đúng chưa, rồi khởi chạy game với bố cục mặc định trước khi đổi giao diện hay bộ lọc, để mọi trục trặc về sau đều có nguyên nhân rõ ràng."
      },
      {
        "title": "Những định dạng tệp tin dùng được",
        "body": "Retropa chấp nhận các định dạng tệp tin tương ứng với những hệ máy được hỗ trợ, đồng thời mở trực tiếp được tệp tin chứa ZIP và RetroPack. Phần mở rộng phải khớp với hệ máy: tệp tin Game Boy là .gb, Game Boy Color là .gbc, Game Boy Advance là .gba, còn DS là .nds.",
        "points": [
          "Đổi phần mở rộng không chuyển được game từ hệ máy này sang hệ máy khác.",
          "Tệp tin chứa ZIP và RetroPack có thể mở mà không cần giải nén.",
          "Bộ game arcade gồm nhiều tệp tin và được xử lý theo cách khác."
        ]
      },
      {
        "title": "Khi việc nhập thất bại",
        "body": "Trước tiên hãy đọc kỹ thông báo lỗi, sau đó kiểm tra ba điều theo thứ tự: tệp tin đã tải về trọn vẹn chưa, phần mở rộng có khớp với hệ máy không, và tệp tin có phải bản hoàn chỉnh chứ không phải bản tải dở dang. Chỉ sau khi kiểm tra xong mới nên nghi ngờ nhân giả lập.",
        "points": [
          "Hoàn tất mọi bản tải về còn dở dang trước tiên.",
          "Xác nhận phần mở rộng khớp với hệ máy.",
          "Thử nhân giả lập thay thế cho hệ máy đó trước khi bỏ cuộc."
        ]
      },
      {
        "title": "Tệp tin, bản lưu và bản lưu trạng thái",
        "body": "Tệp tin game, dữ liệu lưu của chính game và bản lưu trạng thái của trình giả lập là ba thứ khác nhau. Đổi tên thứ này thành thứ kia không biến đổi chúng. Hãy sao lưu cả ba trước khi chuyển sang nhân giả lập hay ứng dụng khác, vì định dạng trạng thái không dùng chung được cho mọi nhân giả lập.",
        "points": [
          "Giữ nguyên tệp tin game gốc, không chỉnh sửa.",
          "Sao lưu riêng bản lưu pin và bản lưu trạng thái.",
          "Đừng mong một bản lưu trạng thái của nhân này tải được trên nhân khác."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa có kèm game sẵn không?",
        "answer": "Không. Retropa là trình giả lập và không cung cấp game hay tệp tin BIOS. Bạn tự nhập những tệp tin mà bạn có quyền sử dụng."
      },
      {
        "id": "cloud",
        "question": "Vì sao tệp tin của tôi không nhập được?",
        "answer": "Nguyên nhân phổ biến nhất là tệp tin chỉ là bản giữ chỗ trên đám mây chứ chưa được tải về. Hãy mở tệp tin trong Tệp tin để buộc tải xuống, rồi nhập lại."
      },
      {
        "id": "zip",
        "question": "Tôi có thể nhập tệp tin ZIP không?",
        "answer": "Retropa mở trực tiếp được tệp tin chứa ZIP và RetroPack, nên thường không cần giải nén, trừ khi một luồng nhập cụ thể yêu cầu."
      }
    ],
    "related": [
      "connect-controller-ios",
      "save-states-and-rewind",
      "game-wont-load"
    ]
  },
  "connect-controller-ios": {
    "kind": "guide",
    "slug": "connect-controller-ios",
    "label": "Tay cầm",
    "title": "Kết nối tay cầm với Retropa trên iPhone & iPad",
    "description": "Ghép nối tay cầm Bluetooth hoặc tay cầm có dây với iOS và gán nút trong Retropa, cùng cách xử lý nút bấm không phản hồi hoặc bố cục nút thay đổi theo từng game.",
    "summary": "Hãy ghép nối tay cầm tương thích với iOS trước, rồi kiểm tra lại việc gán nút trong Retropa theo từng hệ máy và từng game. Hướng dẫn này gồm thứ tự ghép nối, những lỗi gán nút thường gặp và cách dùng song song cảm ứng với tay cầm.",
    "sections": [
      {
        "title": "Ghép nối với iOS trước khi mở Retropa",
        "body": "Tay cầm phải được iOS nhận biết trước. Hãy ghép nối trong cấu hình hệ thống, xác nhận tay cầm phản hồi ở đó, rồi mới mở Retropa. Tay cầm chưa từng được ghép nối ở cấp hệ thống sẽ không xuất hiện trong ứng dụng, dù bạn có thao tác thế nào trong phần cấu hình của ứng dụng.",
        "points": [
          "Ghép nối trong cấu hình iOS trước tiên.",
          "Xác nhận tay cầm phản hồi trong hệ thống.",
          "Sau đó kiểm tra lại trong Retropa."
        ]
      },
      {
        "title": "Việc gán nút được kiểm tra theo từng hệ máy, không làm một lần cho tất cả",
        "body": "Retropa lưu bố cục điều khiển riêng cho từng hệ máy, vì Game Boy cần sáu nút còn tay cầm SNES cần mười nút. Hãy coi việc gán nút là công việc theo từng hệ máy: sau khi ghép nối một lần, hãy kiểm tra lại cách gán nút cho mỗi hệ máy mà bạn thực sự chơi.",
        "points": [
          "Game Boy: D-pad, A, B, Start, Select.",
          "SNES có thêm X, Y, L và R.",
          "Bố cục arcade có thêm nhiều nút hành động."
        ]
      },
      {
        "title": "Những nút bấm hay bị bỏ quên khi kiểm tra",
        "body": "Trên thực tế, lỗi thường tập trung vào cùng vài nút: nút vai trên tay cầm sáu nút, Start và Select dễ bị đặt xa tầm tay, và các hướng chéo — vốn quan trọng hơn trên những hệ máy mà tay cầm gốc dùng cần gạt công tắc vi mô.",
        "points": [
          "Kiểm tra riêng L và R khi gán nút.",
          "Kiểm tra Start và Select có nằm trong tầm tay không.",
          "Kiểm tra cả các hướng chéo, không chỉ bốn hướng chính."
        ]
      },
      {
        "title": "Điều khiển cảm ứng và tay cầm có thể dùng song song",
        "body": "Một số game cần thao tác chạm mà tay cầm vật lý không thể thay thế, đặc biệt trên những hệ máy hai màn hình. Giữ bố cục trên màn hình luôn sẵn dùng song song với tay cầm đã ghép nối thường thực tế hơn là chuyển qua lại giữa hai cách.",
        "points": [
          "Đừng tắt điều khiển cảm ứng nếu game có dùng màn hình cảm ứng.",
          "Kiểm tra xem lớp phủ có che mất vùng hiển thị game không.",
          "Phản hồi rung và bố cục cảm ứng có thể chỉnh riêng."
        ]
      },
      {
        "title": "Khi một nút bấm không phản hồi",
        "body": "Hãy kiểm tra lần lượt từ tay cầm ra ngoài: xác nhận tay cầm phản hồi trong iOS, rồi trong Retropa, rồi trong một game chắc chắn có dùng nút đó. Nếu cách gán nút có vẻ đúng mà game vẫn bỏ qua một nút, có thể game hoàn toàn không dùng nút đó — điều thường gặp ở các tựa game máy cầm tay đời đầu.",
        "points": [
          "Kiểm tra tay cầm trong cấu hình iOS trước tiên.",
          "Kiểm tra cách gán nút trong Retropa.",
          "Xác nhận game thực sự có dùng nút đó."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Tay cầm nào dùng được?",
        "answer": "Mọi tay cầm mà iOS hỗ trợ đều dùng được với Retropa. Hãy ghép nối trong cấu hình iOS trước, rồi kiểm tra cách gán nút trong ứng dụng."
      },
      {
        "id": "mapping-lost",
        "question": "Vì sao cách gán nút của tôi thay đổi?",
        "answer": "Bố cục được lưu riêng theo từng hệ máy và từng game, nên cách gán nút bạn đặt cho hệ máy này không tự động áp dụng cho hệ máy khác. Hãy kiểm tra cách gán nút của hệ máy bạn đang chơi."
      },
      {
        "id": "touch",
        "question": "Điều khiển cảm ứng có ngừng hoạt động khi dùng tay cầm không?",
        "answer": "Không. Điều khiển cảm ứng vẫn sẵn dùng, rất hữu ích trên những hệ máy mà game cần thao tác chạm hoặc tương tác với màn hình thứ hai."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "gb-emulator"
    ]
  },
  "save-states-and-rewind": {
    "kind": "guide",
    "slug": "save-states-and-rewind",
    "label": "Lưu game",
    "title": "Bản lưu trạng thái và tua lại trong Retropa | iPhone & iPad",
    "description": "Hiểu rõ khác biệt giữa bản lưu trong game, bản lưu trạng thái và tua lại trong Retropa, cách chuyển bản lưu giữa các nhân giả lập an toàn, và cần kiểm tra gì khi bản lưu không tải được.",
    "summary": "Bản lưu trong game, bản lưu trạng thái của trình giả lập và tua lại là ba cơ chế khác nhau với mức độ dùng chung khác nhau. Hướng dẫn này giải thích từng cơ chế hoạt động ra sao và cách sao lưu chúng an toàn.",
    "sections": [
      {
        "title": "Ba thứ khác nhau đều được gọi là bản lưu",
        "body": "Bản lưu của chính game do game tạo ra, bản lưu trạng thái ghi lại toàn bộ trình giả lập tại một thời điểm, còn tua lại phát lại diễn biến gần nhất. Chúng hoạt động khác nhau, được lưu khác nhau, và đổi tên thứ này thành thứ kia không biến đổi chúng.",
        "points": [
          "Bản lưu trong game do chính game tạo ra.",
          "Bản lưu trạng thái ghi lại toàn bộ trình giả lập tại một thời điểm.",
          "Tua lại dựa vào diễn biến gần nhất, không dựa vào tệp tin đã lưu."
        ]
      },
      {
        "title": "Tạo và sử dụng bản lưu trạng thái",
        "body": "Bản lưu trạng thái hữu ích trước một đoạn khó, trước khi đổi nhân giả lập hoặc trước khi áp dụng bộ lọc mới, vì nó cho phép bạn quay lại một thời điểm đã chắc chắn ổn. Lưu nhanh và tải nhanh sinh ra chính là để dùng cho kiểu mốc ngắn hạn như vậy.",
        "points": [
          "Hãy lưu trạng thái trước khi đổi nhân giả lập.",
          "Bản lưu trạng thái là cách nhanh nhất để so sánh hai cài đặt sẵn.",
          "Hãy giữ bản lưu của chính game làm bản ghi dài hạn."
        ]
      },
      {
        "title": "Chuyển bản lưu giữa các nhân giả lập",
        "body": "Bản lưu trạng thái không dùng chung được cho mọi nhân giả lập, vì một bản lưu trạng thái ghi lại tình trạng nội bộ của một bản cài đặt cụ thể. Bản lưu pin do game tạo ra có khả năng chuyển thành công cao hơn nhiều. Hãy sao lưu cả hai trước khi đổi nhân giả lập đang chọn.",
        "points": [
          "Hãy coi bản lưu trạng thái là riêng cho từng nhân giả lập.",
          "Bản lưu pin chuyển đổi đáng tin cậy hơn.",
          "Sao lưu trước khi chuyển nhân giả lập."
        ]
      },
      {
        "title": "Khi bản lưu không tải được",
        "body": "Hãy kiểm tra xem bản lưu là dữ liệu trong game hay bản lưu trạng thái, nhân giả lập có thay đổi kể từ khi bản lưu được tạo hay không, và phiên bản ứng dụng có thay đổi không. Nếu bản lưu trạng thái lỗi, hãy tải bản lưu của chính game thay thế, vì cách đó không phụ thuộc vào định dạng trạng thái nội bộ của trình giả lập.",
        "points": [
          "Xác nhận nhân giả lập chưa thay đổi.",
          "Xác nhận loại bản lưu.",
          "Chuyển sang dùng bản lưu của chính game khi có thể."
        ]
      },
      {
        "title": "Giữ những bản sao lưu bền vững",
        "body": "Hãy để tệp tin game gốc, bản lưu của chính game và mọi bản lưu trạng thái bạn cần ở những nơi riêng biệt. iCloud hay một bản sao trên máy tính đều được; điều quan trọng là một sự cố trong ứng dụng hoặc trên thiết bị không xóa hết mọi bản sao cùng lúc.",
        "points": [
          "Sao lưu cả tệp tin game, không chỉ các bản lưu.",
          "Để bản lưu riêng khỏi các tệp tin trạng thái.",
          "Lưu ít nhất một bản sao bên ngoài thiết bị."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Bản lưu và bản lưu trạng thái khác nhau thế nào?",
        "answer": "Bản lưu do game tạo ra và thể hiện tiến trình theo định dạng của chính game. Bản lưu trạng thái ghi lại toàn bộ trình giả lập tại một thời điểm và gắn với nhân giả lập đã tạo ra nó."
      },
      {
        "id": "rewind",
        "question": "Tôi có thể tua lại xa đến đâu?",
        "answer": "Tua lại phát lại diễn biến gần nhất từ bộ nhớ chứ không khôi phục một tệp tin đã lưu, nên độ xa bị giới hạn bởi bộ đệm chứ không bởi số lượng vị trí lưu cố định."
      },
      {
        "id": "transfer",
        "question": "Tôi có thể chuyển bản lưu sang trình giả lập khác không?",
        "answer": "Bản lưu của chính game là thứ dễ chuyển hơn. Bản lưu trạng thái phụ thuộc vào định dạng nội bộ của một nhân giả lập cụ thể và không nên kỳ vọng tải được ở nơi khác."
      }
    ],
    "related": [
      "import-roms-iphone",
      "game-wont-load",
      "gb-emulator"
    ]
  },
  "game-wont-load": {
    "kind": "guide",
    "slug": "game-wont-load",
    "label": "Khắc phục sự cố",
    "title": "Game không tải được trong Retropa? Cần kiểm tra những gì",
    "description": "Thứ tự chẩn đoán khi game không khởi chạy trong Retropa: bản tải về dở dang, sai phần mở rộng, nhận diện sai hệ máy, thiếu BIOS, bộ ánh xạ không được hỗ trợ và các vấn đề riêng của nhân giả lập.",
    "summary": "Hãy lần lượt kiểm tra theo thứ tự cố định — tệp tin đã tải đủ chưa, phần mở rộng, hệ máy được nhận diện, yêu cầu BIOS, rồi đến việc chọn nhân giả lập — trước khi kết luận một tệp tin không dùng được.",
    "sections": [
      {
        "title": "Kiểm tra theo thứ tự cố định, đừng đoán",
        "body": "Phần lớn lỗi tải game đến từ một vài nguyên nhân, và kiểm tra chúng theo một thứ tự nhất quán giúp bạn không mất thời gian. Thứ tự dưới đây đi từ bước kiểm tra nhanh nhất đến bước tốn thời gian nhất, để bạn dừng lại ngay khi tìm ra nguyên nhân thật sự.",
        "points": [
          "Kiểm tra tệp tin đã tải đủ chưa trước tiên.",
          "Sau đó đến phần mở rộng và hệ máy được nhận diện.",
          "Rồi đến BIOS và việc chọn nhân giả lập."
        ]
      },
      {
        "title": "Kiểm tra một: tệp tin đã thực sự nằm trên thiết bị chưa?",
        "body": "Nếu tệp tin chỉ là bản giữ chỗ trên đám mây, trình giả lập không nhận được gì dùng được dù tệp tin vẫn hiện trong thư viện. Hãy mở tệp tin trong ứng dụng Tệp tin để buộc tải xuống, đợi tải xong rồi nhập lại.",
        "points": [
          "Mục bị làm mờ hoặc đang chờ nghĩa là chưa tải về.",
          "Hoàn tất việc tải về trước khi thử lại.",
          "Đây là nguyên nhân phổ biến nhất."
        ]
      },
      {
        "title": "Kiểm tra hai: phần mở rộng có khớp với hệ máy không?",
        "body": "Mỗi hệ máy có phần mở rộng riêng, và sự không khớp tạo ra tệp tin mà nhân giả lập không đọc hiểu được. Đổi tên phần mở rộng không chuyển đổi được gì, nên tệp tin .gb đổi tên thành .gba vẫn là game Game Boy và sẽ không hoạt động như một tựa Game Boy Advance.",
        "points": [
          "Tệp tin .gb, .gbc, .gba và .nds thuộc những hệ máy khác nhau.",
          "Đổi tên không bao giờ chuyển đổi được game.",
          "Xác nhận hệ máy được nhận diện trong thư viện."
        ]
      },
      {
        "title": "Kiểm tra ba: có thiếu BIOS hoặc bộ gốc không?",
        "body": "Một số hệ máy và dòng game arcade cần thêm tệp tin BIOS, và các bộ game arcade có thể phụ thuộc vào một bộ gốc. Nhân giả lập sẽ báo thiếu gì; hãy đọc kỹ thông báo đó, vì thiếu BIOS và thiếu bộ gốc là hai vấn đề khác nhau với cách xử lý khác nhau.",
        "points": [
          "Đọc nguyên văn nội dung thông báo lỗi.",
          "Tệp tin neogeo.zip của arcade không phải BIOS máy cầm tay.",
          "Retropa không cung cấp BIOS để tải về."
        ]
      },
      {
        "title": "Kiểm tra bốn: thử nhân giả lập còn lại",
        "body": "Nhiều hệ máy có hơn một nhân giả lập để lựa chọn. Nếu tệp tin đã đầy đủ, đúng tên và không thiếu thành phần phụ thuộc nào, thì đổi nhân giả lập là bước thử tiếp theo, vì các nhân giả lập khác nhau ở mức độ bám sát phần cứng gốc.",
        "points": [
          "Ghi lại nhân giả lập nào bị lỗi.",
          "Đổi nhân giả lập và thử lại một lần.",
          "So sánh với một game thứ hai trên cùng nhân giả lập."
        ]
      },
      {
        "title": "Cần gửi kèm những gì khi yêu cầu hỗ trợ",
        "body": "Nếu game vẫn không khởi chạy, những thông tin hữu ích là phiên bản ứng dụng, hệ máy, nhân giả lập đang chọn và nguyên văn nội dung thông báo lỗi. Đừng đính kèm tệp tin game thương mại hay tệp tin BIOS, vì việc chẩn đoán không cần đến chúng và những tệp tin đó cũng không nên chia sẻ.",
        "points": [
          "Phiên bản ứng dụng và hệ máy.",
          "Nhân giả lập đang chọn và nội dung thông báo lỗi.",
          "Không bao giờ đính kèm tệp tin ROM hay BIOS thương mại."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "Game mở ra chỉ thấy màn hình đen. Điều đó nghĩa là gì?",
        "answer": "Thường là do tệp tin tải về chưa đủ, một biến thể tệp tin không được hỗ trợ hoặc thiếu thành phần phụ thuộc như BIOS. Hãy kiểm tra việc tải về trước, rồi đến phần mở rộng, sau đó là nguyên văn thông báo lỗi mà nhân giả lập đưa ra."
      },
      {
        "id": "worked-before",
        "question": "Một game trước đây chạy được mà giờ không chạy. Vì sao?",
        "answer": "Hãy kiểm tra xem phiên bản ứng dụng, nhân giả lập đang chọn hoặc vị trí tệp tin có thay đổi không. Bản lưu trạng thái gắn với từng nhân giả lập, nên bản lưu do nhân khác tạo ra có thể không tải được dù bản thân game vẫn chạy tốt."
      },
      {
        "id": "support",
        "question": "Tôi nên gửi kèm những gì khi yêu cầu hỗ trợ?",
        "answer": "Phiên bản ứng dụng, hệ máy, nhân giả lập đang chọn và nguyên văn nội dung thông báo lỗi. Đừng đính kèm tệp tin game thương mại hay tệp tin BIOS."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "arcade"
    ]
  },
  "plus": {
    "kind": "capability",
    "slug": "plus",
    "label": "Retropa Plus",
    "title": "Retropa Plus: tính năng miễn phí và tính năng cần Plus",
    "description": "Những tính năng nào của Retropa miễn phí và tính năng nào cần Retropa Plus: hệ máy cầm tay, dòng game arcade, giao diện cao cấp, bộ lọc nâng cao và chế độ console. Giá hiện hành được hiển thị trong ứng dụng.",
    "summary": "Retropa miễn phí tải về. Giả lập máy cầm tay dùng được mà không cần trả phí; dòng game arcade, giao diện cao cấp và bộ lọc hiển thị nâng cao thuộc về Retropa Plus. Giá hiện hành và các gói đang có được hiển thị trong ứng dụng.",
    "sections": [
      {
        "title": "Những gì được dùng miễn phí",
        "body": "Tải Retropa không tốn phí, và giả lập máy cầm tay hoạt động mà không cần mua. Bạn có thể nhập tệp tin game của mình, dùng giao diện tiêu chuẩn, dùng các cài đặt sẵn hiển thị thông thường, và thiết lập bản lưu trạng thái cùng việc gán nút tay cầm. Việc nhập tệp tin không hề kích hoạt bất kỳ khoản thanh toán nào.",
        "points": [
          "Miễn phí tải về.",
          "Các hệ máy cầm tay dùng được mà không cần mua.",
          "Bao gồm giao diện tiêu chuẩn và các cài đặt sẵn hiển thị thông thường.",
          "Nhập game không bao giờ mở khóa hay đòi hỏi tính năng trả phí."
        ]
      },
      {
        "title": "Những gì cần đến Retropa Plus",
        "body": "Retropa Plus bao gồm các dòng game arcade, giao diện cao cấp và bộ lọc hiển thị nâng cao. Đây là những khả năng bổ sung chứ không phải hạn chế những gì bạn đã có: chơi game cầm tay vẫn hoạt động dù bạn có đăng ký hay không.",
        "points": [
          "Dòng game arcade: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Giao diện cao cấp.",
          "Bộ lọc CRT và LCD nâng cao.",
          "Chế độ console và các quy trình lưu nâng cao."
        ]
      },
      {
        "title": "Vì sao hỗ trợ arcade thuộc gói Plus",
        "body": "Giả lập arcade là một mảng công việc riêng: nhiều loại bo mạch, bộ game gồm nhiều tệp tin, phụ thuộc BIOS và khả năng tương thích theo từng bộ. Coi đó là một khả năng bổ sung giúp gói miễn phí vẫn đơn giản và giữ trải nghiệm máy cầm tay luôn sẵn có cho mọi người mà không tốn phí.",
        "points": [
          "Phần cứng arcade không phải phần cứng máy cầm tay.",
          "Bộ game arcade gồm nhiều tệp tin và có thể cần BIOS.",
          "Hỗ trợ máy cầm tay không phụ thuộc vào Plus."
        ]
      },
      {
        "title": "Game và tệp tin BIOS không bao giờ được kèm sẵn",
        "body": "Không gói nào của Retropa cung cấp tệp tin game hay tệp tin BIOS, vì ứng dụng là một trình giả lập. Bạn tự cung cấp nội dung mà bạn có quyền sử dụng, và yêu cầu đó không thay đổi dù có mua hay không. Gói đăng ký mở khóa khả năng của trình giả lập, chứ không mở khóa nội dung.",
        "points": [
          "Không gói nào kèm sẵn game.",
          "Không cung cấp tệp tin BIOS.",
          "Chỉ nhập nội dung mà bạn có quyền sử dụng."
        ]
      },
      {
        "title": "Xem giá hiện hành ở đâu",
        "body": "Giá, các gói đang có và mọi ưu đãi theo khu vực được hiển thị trong ứng dụng, nơi App Store có thể trình bày bằng đơn vị tiền tệ địa phương của bạn. Trang này chủ động không liệt kê giá, để việc thay đổi giá không bao giờ khiến trang trở nên lỗi thời.",
        "points": [
          "Giá được hiển thị trong ứng dụng.",
          "Tình trạng sẵn có có thể khác nhau theo khu vực.",
          "Giao dịch mua do App Store xử lý."
        ]
      },
      {
        "title": "Giao dịch mua do App Store xử lý",
        "body": "Mọi giao dịch mua và đăng ký đều thực hiện qua App Store. Retropa không xử lý thanh toán trên web, và trang web này không bao giờ yêu cầu thông tin thẻ. Việc gia hạn, hủy và hoàn tiền do App Store quản lý theo các điều khoản của chính App Store.",
        "points": [
          "Trang web này không thu bất kỳ khoản thanh toán nào.",
          "Quản lý hoặc hủy đăng ký trong cấu hình App Store.",
          "Việc hoàn tiền theo chính sách của App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Tôi có thể dùng Retropa mà không trả phí không?",
        "answer": "Có. Tải Retropa miễn phí và giả lập máy cầm tay hoạt động mà không cần mua. Dòng game arcade, giao diện cao cấp và bộ lọc nâng cao cần Retropa Plus."
      },
      {
        "id": "price",
        "question": "Retropa Plus có giá bao nhiêu?",
        "answer": "Giá và các gói đang có được hiển thị trong ứng dụng, nơi App Store có thể trình bày bằng đơn vị tiền tệ địa phương của bạn. Trang này không liệt kê giá để việc thay đổi giá không bao giờ khiến trang trở nên lỗi thời."
      },
      {
        "id": "buy-here",
        "question": "Tôi có thể đăng ký trên trang web này không?",
        "answer": "Không. Giao dịch mua hoàn toàn do App Store xử lý. Trang web này không bao giờ thu thập thông tin thanh toán."
      },
      {
        "id": "content",
        "question": "Gói Plus có kèm game không?",
        "answer": "Không. Không gói nào của Retropa cung cấp tệp tin game hay BIOS. Bạn tự nhập nội dung mà bạn có quyền sử dụng."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
