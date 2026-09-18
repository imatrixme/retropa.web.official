import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Cách nhập ROM trong Retropa | Hướng dẫn cho iPhone và iPad",
  "description": "Nhập game GBA, DS và arcade trên iPhone và iPad. Giải đáp về ROM, BIOS, giao diện Delta, tay cầm, bản lưu, Plus và bộ lọc nâng cao không cần tỉ lệ nguyên.",
  "title": "Game đầu tiên của bạn trong Retropa.",
  "intro": "Từ một tệp tin bạn sở hữu đến một game bạn có thể chơi. Hãy bắt đầu với một hệ máy cầm tay được hỗ trợ, rồi điều chỉnh tay cầm và hình ảnh theo ý bạn.",
  "steps": [
    [
      "Tải Retropa",
      "Cài đặt Retropa từ App Store trên một chiếc iPhone hoặc iPad dùng iOS 18 trở lên. Ứng dụng tải miễn phí; một số tính năng cần Plus."
    ],
    [
      "Nhập game của bạn",
      "Mở mục nhập trong thư viện của bạn và chọn một ROM được hỗ trợ từ ứng dụng Tệp tin. Với GBA, hãy dùng tệp .gba; với DS, hãy dùng tệp .nds. Giữ tệp tin gốc làm bản dự phòng. ROM và tệp tin BIOS không được cung cấp."
    ],
    [
      "Mở game từ thư viện",
      "Chọn game đã nhập và bắt đầu chơi. Hãy kiểm tra các nút điều khiển trên màn hình trước khi đổi giao diện hay bộ lọc. Nếu một game không khởi động được, hãy kiểm tra hệ máy, định dạng tệp tin và BIOS cần thiết nếu có."
    ]
  ],
  "faqTitle": "Trước khi bạn bắt đầu",
  "systems": "Xem các hệ máy được hỗ trợ",
  "support": "Cần trợ giúp?",
  "faqs": [
    {
      "id": "devices",
      "question": "Những chiếc iPhone và iPad nào chạy được Retropa?",
      "answer": "Retropa có trên App Store cho iPhone và iPad dùng iOS 18 trở lên. Hãy xem phần tương thích trong App Store để biết về thiết bị của bạn. Các nhân giả lập arcade nặng hơn và bộ lọc hiển thị nhiều lượt có thể đòi hỏi hiệu năng cao hơn một game cầm tay đơn giản."
    },
    {
      "id": "systems",
      "question": "Retropa có chơi được game GBA, Nintendo DS và arcade không?",
      "answer": "Retropa hỗ trợ GBA, DS cùng các hệ máy cầm tay và console khác có trong danh sách, bên cạnh những dòng arcade được hỗ trợ như CPS, PGM và M92. Khả năng tương thích phụ thuộc vào ứng dụng đã cài, nhân giả lập và định dạng game; điều đó không có nghĩa là mọi game hay mọi tệp lưu trữ arcade đều được hỗ trợ.",
      "link": "cores",
      "linkLabel": "Xem các hệ máy và định dạng tệp tin được hỗ trợ"
    },
    {
      "id": "games",
      "question": "Retropa có kèm game hay ROM để tải về không?",
      "answer": "Không. Retropa là trình giả lập, không phải dịch vụ đăng ký game thương mại hay cửa hàng ROM. Hãy mang đến nội dung bạn có quyền sử dụng, chẳng hạn dự án của chính bạn hoặc game homebrew được phát hành có phép. ROM thương mại và tệp tin BIOS không được cung cấp."
    },
    {
      "id": "import",
      "question": "Làm thế nào để nhập ROM GBA hoặc DS trên iPhone?",
      "answer": "Hãy giữ tệp tin game ở một vị trí có thể truy cập qua ứng dụng Tệp tin của iOS. Mở mục nhập trong thư viện của Retropa, chọn tệp tin được hỗ trợ rồi mở game đã nhập từ thư viện. GBA dùng .gba và DS dùng .nds. Đổi tên một phần mở rộng khác không chuyển game sang đúng định dạng."
    },
    {
      "id": "bios",
      "question": "Tôi có cần tệp tin BIOS cho Retropa không?",
      "answer": "Yêu cầu về BIOS khác nhau tùy hệ máy và nhân giả lập. Nếu Retropa báo thiếu BIOS, hãy xem yêu cầu của hệ máy đó và cung cấp đúng tệp tin qua quy trình được ứng dụng hỗ trợ. BIOS của hệ máy khác không thay thế được. Retropa không cung cấp BIOS để tải về.",
      "link": "cores",
      "linkLabel": "Xem yêu cầu của từng hệ máy"
    },
    {
      "id": "arcade-zip",
      "question": "Vì sao ZIP hay ROM set arcade của tôi không khởi động được?",
      "answer": "Một tệp lưu trữ arcade phải khớp với bo mạch và ROM set mà nhân giả lập của nó yêu cầu. Một số set còn phụ thuộc vào bộ cha hoặc BIOS, nên chỉ riêng một tệp ZIP clone có thể chưa đầy đủ. Hãy giữ nguyên tệp lưu trữ, trừ khi ứng dụng yêu cầu giải nén. Chạy arcade cũng cần Plus; gói đăng ký không thể sửa được dữ liệu ROM còn thiếu hay không tương thích."
    },
    {
      "id": "missing-file",
      "question": "Vì sao tôi thấy game trong ứng dụng Tệp tin nhưng không nhập được?",
      "answer": "Hãy kiểm tra rằng tệp tin thật sự có sẵn trên máy, chứ không chỉ là mục giữ chỗ trên đám mây, và định dạng của nó khớp với một hệ máy được hỗ trợ. Hãy xem thông báo lỗi mà Retropa hiển thị. Giữ một bản dự phòng của tệp gốc trong lúc tìm nguyên nhân, và đừng cho rằng một tệp ZIP đã đổi tên hay một bản tải về chưa hoàn tất là ROM hợp lệ."
    },
    {
      "id": "offline",
      "question": "Tôi có thể chơi game lưu trên máy mà không cần truyền phát không?",
      "answer": "Retropa chạy các tệp tin game được hỗ trợ ngay trên thiết bị của bạn, chứ không truyền phát hình ảnh từ một trình giả lập trên đám mây. Hãy nhập trước các tệp tin game và BIOS cần thiết. Việc tải gói, lấy thông tin trực tuyến và dùng các tính năng đám mây vẫn cần kết nối mạng riêng."
    },
    {
      "id": "delta-skins",
      "question": "Tôi có thể dùng giao diện Delta trong Retropa không?",
      "answer": "Retropa hỗ trợ nhập các gói .deltaskin. Hãy dùng trọn gói, chọn bố cục cho hệ máy tương ứng và kiểm tra khả năng hỗ trợ chiều dọc hoặc chiều ngang. Việc hỗ trợ định dạng không bảo đảm mọi giao diện của bên thứ ba đều vừa với mọi chiếc iPhone. Khả năng tương thích với Delta nói về một định dạng tệp tin, chứ không phải mối liên hệ nào.",
      "link": "delta-skins",
      "linkLabel": "Đọc hướng dẫn nhập giao diện Delta"
    },
    {
      "id": "controllers",
      "question": "Retropa có hỗ trợ tay cầm Bluetooth hay tay cầm ngoài không?",
      "answer": "Retropa hỗ trợ tay cầm ngoài tương thích và việc gán nút theo ý muốn. Hãy kết nối tay cầm qua iOS trước, rồi kiểm tra việc gán nút trong Retropa. Với game arcade, hãy xác nhận cả nút xu và nút bắt đầu, không chỉ các nút hành động. Khả năng tương thích phụ thuộc vào tay cầm và sự hỗ trợ của iOS."
    },
    {
      "id": "saves",
      "question": "Bản lưu trong game và trạng thái lưu của trình giả lập có giống nhau không?",
      "answer": "Không. Bản lưu trong game do chính game tạo ra; trạng thái lưu ghi lại quá trình chạy của trình giả lập. Trạng thái lưu có thể phụ thuộc vào đúng nhân giả lập và phiên bản, nên đừng cho rằng chúng dùng được giữa các ứng dụng hay nhân giả lập. Hãy giữ lại tệp tin gốc và bản dự phòng trước khi chuyển hoặc thay thế bản lưu."
    },
    {
      "id": "plus",
      "question": "Retropa có miễn phí không, và Plus mở khóa những gì?",
      "answer": "Retropa tải miễn phí. Nhân giả lập arcade, giao diện cao cấp và bộ lọc nâng cao cần Retropa Plus. Gói hiện hành, giá theo khu vực và điều khoản mua đều được hiển thị trong ứng dụng trước khi mua. Tải miễn phí không có nghĩa là mọi nhân giả lập hay tài nguyên đều được kèm theo."
    },
    {
      "id": "restore",
      "question": "Làm thế nào để khôi phục giao dịch Retropa Plus trước đây?",
      "answer": "Hãy dùng chức năng khôi phục giao dịch trong ứng dụng với Apple Account đã dùng cho giao dịch gốc. Kiểm tra rằng giao dịch hoặc gói đăng ký vẫn còn hiệu lực. Khôi phục quyền sử dụng không mang lại các tệp tin ROM hay bản lưu game còn thiếu. Khi liên hệ hỗ trợ, hãy nêu phiên bản ứng dụng và vấn đề giao dịch, chứ đừng gửi mật khẩu tài khoản."
    },
    {
      "id": "advanced-filters",
      "question": "Bộ lọc nâng cao của Retropa khác gì bộ lọc CRT thông thường?",
      "answer": "Bộ lọc hiển thị đơn giản thường chỉ phủ lên những đường quét hay lưới điểm ảnh đã lấy mẫu. Các cấu hình nâng cao của Retropa như CRT V4 và Trinitron mô phỏng chùm tia và cấu trúc huỳnh quang bằng tích phân theo điểm ảnh đầu ra hoặc lọc giới hạn băng tần. DMG bao gồm các tế bào tinh thể lỏng lấy tích phân và một lớp nền phản xạ. Đây là những mô hình màn hình, chứ không chỉ là một lớp pha màu.",
      "link": "crt-filters",
      "linkLabel": "So sánh các bộ lọc hiển thị nâng cao"
    },
    {
      "id": "integer-scaling",
      "question": "Bộ lọc nâng cao của Retropa có cần tỉ lệ nguyên không?",
      "answer": "Không. Bộ lọc nâng cao của Retropa tính đến kích thước đầu ra thực tế thay vì đòi hỏi bội số 2, 3 hay một bội số nguyên nào khác. Điều đó cho bạn tự do hơn khi đưa game vừa với vùng hiển thị của điện thoại, hướng màn hình hoặc giao diện đã chọn. Tỉ lệ khung hình gốc vẫn có thể giữ nguyên. Kết quả vẫn phụ thuộc vào cấu hình và thiết bị; bộ lọc không tạo thêm độ phân giải nguồn.",
      "link": "crt-filters",
      "linkLabel": "Tìm hiểu về kết xuất ở tỉ lệ không nguyên"
    },
    {
      "id": "shader-import",
      "question": "Retropa có nhập được shader .slang và .slangp của RetroArch không?",
      "answer": "Retropa hỗ trợ quy trình shader .slang và .slangp. Một cấu hình có thể tham chiếu nhiều lượt hoặc nhiều họa tiết; hãy giữ các tệp phụ thuộc đó đi cùng nhau khi nhập. Không phải mọi cấu hình của bên thứ ba đều chắc chắn chạy được. Nếu một cấu hình không chạy, hãy kiểm tra các tệp tin và khả năng tương thích của nó, thay vì đổi tên nó hay thay đổi game.",
      "link": "crt-filters",
      "linkLabel": "Đọc về khả năng tương thích shader"
    },
    {
      "id": "performance",
      "question": "Bộ lọc nâng cao có ảnh hưởng đến tốc độ khung hình hay thời lượng pin không?",
      "answer": "Có thể có. Kết xuất nhiều lượt cần nhiều công việc GPU hơn hình ảnh chưa qua bộ lọc, và chi phí thay đổi theo cấu hình, kích thước đầu ra, thiết bị và nhân giả lập. Hãy so sánh với hình ảnh gốc nếu bạn thấy chậm, rồi thử một bộ lọc nhẹ hơn. Tỉ lệ không nguyên là một tính năng về chất lượng hiển thị, không phải lời hứa về hiệu năng GPU vô hạn."
    },
    {
      "id": "packages",
      "question": "Tôi lấy giao diện và gói bộ lọc của Retropa ở đâu?",
      "answer": "Hãy xem các gói giao diện và shader trên PackHub. Kiểm tra hệ máy, định dạng và yêu cầu Plus của gói trong ứng dụng. Tài nguyên đã nhập không vượt qua bước kiểm tra quyền sử dụng. Nếu cần trợ giúp, hãy nêu phiên bản ứng dụng, tên gói và thông báo lỗi, nhưng đừng gửi ROM thương mại hay tệp tin BIOS."
    }
  ]
}
