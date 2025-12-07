/**
 * JMAD Internationalization (i18n) Script
 * Handles language detection, manual switching, and text content updates.
 */

const translations = {
    "en": {
        "nav": {
            "innovation": "Innovation",
            "managed_ops": "Managed Ops",
            "partners": "Partners",
            "insights": "Insights",
            "about": "About",
            "get_started": "Get Started"
        },
        "hero": {
            "title_line1": "Your Strategic Technology Partner.",
            "title_line2": "From Startups to Enterprise.",
            "subtitle": "We bridge the gap between business goals and technical execution. Whether you are a B2C startup, an SME needing a virtual IT department, or an enterprise building Fintech solutions, JMAD delivers.",
            "btn_solutions": "Our Solutions",
            "btn_talk": "Talk to an Expert"
        },
        "services": {
            "label": "INNOVATION",
            "title": "Digital Growth & Engineering.",
            "desc": "We don't just build software; we build businesses. From high-conversion marketing to enterprise-grade applications.",
            "marketing_title": "Digital Marketing",
            "marketing_desc": "Data-driven growth strategies. SEO, SEM, and performance marketing designed to scale your user base and maximize ROI.",
            "web_title": "Web Development",
            "web_desc": "Modern, responsive, and blazing fast web applications built with Next.js and React. Enterprise performance for every scale.",
            "app_title": "Mobile App Dev",
            "app_desc": "Native and cross-platform mobile experiences for iOS and Android. Beautiful, intuitive, and built for engagement.",
            "ui_title": "UI/UX Design",
            "ui_desc": "World-class design systems and interfaces. We craft user journeys that are as beautiful as they are functional."
        },
        "partners": {
            "label": "INFRASTRUCTURE",
            "title": "Strategic Cloud Partners",
            "desc": "We leverage the world's best cloud platforms."
        },
        "about": {
            "title": "Built for the Future of IT.",
            "desc1": "JMAD was founded to bridge the gap between complex enterprise technology and accessible business solutions. We aren't just support tickets; we are your strategic technology partner.",
            "desc2": "Our mission is to empower businesses with resilient infrastructure, proactive security, and digital experiences that drive growth.",
            "btn_learn": "Learn More About Us",
            "list_certified": "Certified Cloud Architects (AWS/Azure)",
            "list_monitoring": "24/7 Proactive Monitoring Center",
            "list_security": "Enterprise-Grade Cyber Security",
            "list_uptime": "99.9% Uptime SLA Guarantee",
            "list_global": "Global Strategic Partnerships"
        },
        "msp": {
            "label": "MANAGED OPERATIONS",
            "title": "Your Virtual IT Department.",
            "desc": "For businesses without internal IT teams. We handle everything from desktops to security, acting as your dedicated technology partner.",
            "helpdesk_title": "IT Helpdesk & Support",
            "helpdesk_desc": "Unlimited remote and on-site support for your team. Quick resolution times and friendly experts ready to help.",
            "security_title": "Managed Security (MSSP)",
            "security_desc": "Next-gen antivirus, ransomware protection, firewall management, and 24/7 threat hunting to keep data safe.",
            "backup_title": "Backup & Disaster Recovery",
            "backup_desc": "Automated daily backups and rapid recovery plans ensuring your business data is never lost and always accessible.",
            "monitoring_title": "Proactive Monitoring",
            "monitoring_desc": "We fix issues before they disrupt you. Real-time server, network, and endpoint monitoring around the clock.",
            "btn_quote": "Get a Managed Quote"
        },
        "insights": {
            "label": "PORTFOLIO",
            "title": "Engineering Insights & Case Studies",
            "desc": "Real-world examples of how we solve complex challenges and drive digital transformation.",
            "case1_tag": "Blockchain",
            "case1_title": "Blockchain in Supply Chain",
            "case1_desc": "Implemented a private blockchain network to ensure end-to-end transparency and immutable traceability for global logistics, reducing disputes by 90%.",
            "case1_footer": "Traceability",
            "case2_tag": "Fintech",
            "case2_title": "E-Wallet Ecosystem",
            "case2_desc": "Developed a super-app ecosystem integrating social media with a secure e-wallet payment gateway, handling high-volume peer-to-peer transactions.",
            "case2_footer": "Payments",
            "case3_tag": "High Scale",
            "case3_title": "iGaming Scale & Resiliency",
            "case3_desc": "Architected a highly resilient microservices infrastructure capable of scaling to support millions of concurrent users during peak gaming events.",
            "case3_footer": "Scalability",
            "case4_tag": "Strategy",
            "case4_title": "Marketing Success Strategy",
            "case4_desc": "Executed a data-driven digital marketing strategy utilizing AI analytics to optimize ad spend, resulting in a 300% ROI increase for a retail client.",
            "case4_footer": "Growth"
        },
        "footer": {
            "copyright": "&copy; 2025 JMAD Solutions. All rights reserved."
        }
    },
    "zh": {
        "nav": {
            "innovation": "创新服务",
            "managed_ops": "运维托管",
            "partners": "合作伙伴",
            "insights": "行业洞察",
            "about": "关于我们",
            "get_started": "立即开始"
        },
        "hero": {
            "title_line1": "您的战略技术合作伙伴。",
            "title_line2": "从初创到企业级规模。",
            "subtitle": "我们弥合业务目标与技术落地之间的鸿沟。无论您是B2C初创公司、需要虚拟IT部门的中小企业，还是构建金融科技解决方案的大型企业，JMAD都能助您一臂之力。",
            "btn_solutions": "解决方案",
            "btn_talk": "咨询专家"
        },
        "services": {
            "label": "创新",
            "title": "数字增长与工程化。",
            "desc": "我们不只是开发软件，更是为了构建业务。从高转化率的营销方案到企业级应用程序。",
            "marketing_title": "数字营销",
            "marketing_desc": "数据驱动的增长策略。通过SEO、SEM和效果营销，扩大用户群并最大化投资回报率。",
            "web_title": "Web开发",
            "web_desc": "基于Next.js和React构建的现代化、响应式且极速的Web应用。适应各种规模的企业级性能。",
            "app_title": "移动应用开发",
            "app_desc": "iOS和Android的原生及跨平台移动体验。美观、直观，专为提升用户参与度而打造。",
            "ui_title": "UI/UX设计",
            "ui_desc": "世界级的设计系统和界面。我们打造既美观又实用的用户旅程。"
        },
        "partners": {
            "label": "基础设施",
            "title": "战略云合作伙伴",
            "desc": "我们利用全球顶尖的云平台为您服务。"
        },
        "about": {
            "title": "构建未来的IT。",
            "desc1": "JMAD的成立旨在弥合复杂企业技术与便捷商业解决方案之间的差距。我们不仅处理工单，更是您的战略技术合作伙伴。",
            "desc2": "我们的使命是通过弹性基础设施、主动安全防护和数字体验赋能企业，推动业务增长。",
            "btn_learn": "了解更多",
            "list_certified": "认证云架构师 (AWS/Azure)",
            "list_monitoring": "7x24小时主动监控中心",
            "list_security": "企业级网络安全",
            "list_uptime": "99.9% 正常运行时间SLA保证",
            "list_global": "全球战略合作伙伴"
        },
        "msp": {
            "label": "运维托管",
            "title": "您的虚拟IT部门。",
            "desc": "专为无内部IT团队的企业设计。我们处理从桌面支持到安全防护的所有事务，做您专属的技术合作伙伴。",
            "helpdesk_title": "IT帮助台支持",
            "helpdesk_desc": "为您的团队提供无限次远程和现场支持。快速响应，专家团队随时待命。",
            "security_title": "托管安全 (MSSP)",
            "security_desc": "新一代防病毒、勒索软件防护、防火墙管理和7x24小时威胁搜寻，确保数据安全。",
            "backup_title": "备份与灾难恢复",
            "backup_desc": "自动化每日备份和快速恢复计划，确保您的业务数据永不丢失且随时可用。",
            "monitoring_title": "主动监控",
            "monitoring_desc": "我们在问题干扰业务前将其解决。全天候实时监控服务器、网络和终端。",
            "btn_quote": "获取运维报价"
        },
        "insights": {
            "label": "案例库",
            "title": "工程洞察与案例研究",
            "desc": "我们解决复杂挑战并推动数字化转型的真实案例。",
            "case1_tag": "区块链",
            "case1_title": "供应链区块链应用",
            "case1_desc": "实施私有区块链网络，确保全球物流的端到端透明度和不可篡改的可追溯性，减少90%的纠纷。",
            "case1_footer": "可追溯性",
            "case2_tag": "金融科技",
            "case2_title": "电子钱包生态系统",
            "case2_desc": "开发集成了社交媒体与安全电子钱包支付网关的超级应用生态系统，处理海量点对点交易。",
            "case2_footer": "支付",
            "case3_tag": "高并发",
            "case3_title": "iGaming 规模化与弹性",
            "case3_desc": "构建高弹性微服务架构，能够扩展以支持大型游戏活动期间数百万并发用户。",
            "case3_footer": "可扩展性",
            "case4_tag": "策略",
            "case4_title": "营销成功策略",
            "case4_desc": "执行利用AI分析的数据驱动型数字营销策略以优化广告支出，使零售客户的ROI提高300%。",
            "case4_footer": "增长"
        },
        "footer": {
            "copyright": "&copy; 2025 JMAD Solutions.保留所有权利。"
        }
    },
    "vi": {
        "nav": {
            "innovation": "Đổi mới",
            "managed_ops": "Vận hành",
            "partners": "Đối tác",
            "insights": "Thông tin",
            "about": "Giới thiệu",
            "get_started": "Bắt đầu"
        },
        "hero": {
            "title_line1": "Đối tác Công nghệ Chiến lược.",
            "title_line2": "Từ Startup đến Doanh nghiệp lớn.",
            "subtitle": "Chúng tôi thu hẹp khoảng cách giữa mục tiêu kinh doanh và thực thi kỹ thuật. Dù bạn là startup B2C, doanh nghiệp SME hay tập đoàn lớn xây dựng giải pháp Fintech, JMAD đều đáp ứng.",
            "btn_solutions": "Giải pháp của chúng tôi",
            "btn_talk": "Trao đổi với chuyên gia"
        },
        "services": {
            "label": "ĐỔI MỚI",
            "title": "Tăng trưởng Kỹ thuật số & Kỹ thuật.",
            "desc": "Chúng tôi không chỉ viết phần mềm; chúng tôi xây dựng doanh nghiệp. Từ marketing chuyển đổi cao đến các ứng dụng cấp doanh nghiệp.",
            "marketing_title": "Digital Marketing",
            "marketing_desc": "Chiến lược tăng trưởng dựa trên dữ liệu. SEO, SEM và tiếp thị hiệu suất được thiết kế để mở rộng người dùng và tối đa hóa ROI.",
            "web_title": "Phát triển Web",
            "web_desc": "Ứng dụng web hiện đại, phản hồi nhanh và tốc độ cao được xây dựng với Next.js và React. Hiệu suất doanh nghiệp cho mọi quy mô.",
            "app_title": "Phát triển Ứng dụng Di động",
            "app_desc": "Trải nghiệm di động native và đa nền tảng cho iOS và Android. Đẹp, trực quan và được xây dựng để tương tác.",
            "ui_title": "Thiết kế UI/UX",
            "ui_desc": "Hệ thống thiết kế và giao diện đẳng cấp thế giới. Chúng tôi tạo ra hành trình người dùng đẹp mắt và đầy đủ chức năng."
        },
        "partners": {
            "label": "HẠ TẦNG",
            "title": "Đối tác Đám mây Chiến lược",
            "desc": "Chúng tôi tận dụng các nền tảng đám mây tốt nhất thế giới."
        },
        "about": {
            "title": "Xây dựng cho Tương lai của CNTT.",
            "desc1": "JMAD được thành lập để thu hẹp khoảng cách giữa công nghệ doanh nghiệp phức tạp và các giải pháp kinh doanh dễ tiếp cận. Chúng tôi không chỉ xử lý sự cố; chúng tôi là đối tác công nghệ chiến lược của bạn.",
            "desc2": "Sứ mệnh của chúng tôi là trao quyền cho doanh nghiệp với hạ tầng linh hoạt, bảo mật chủ động và trải nghiệm kỹ thuật số thúc đẩy tăng trưởng.",
            "btn_learn": "Tìm hiểu thêm",
            "list_certified": "Kiến trúc sư Đám mây được Chứng nhận (AWS/Azure)",
            "list_monitoring": "Trung tâm Giám sát Chủ động 24/7",
            "list_security": "An ninh Mạng cấp Doanh nghiệp",
            "list_uptime": "Đảm bảo SLA thời gian hoạt động 99.9%",
            "list_global": "Đối tác Chiến lược Toàn cầu"
        },
        "msp": {
            "label": "VẬN HÀNH QUẢN LÝ",
            "title": "Bộ phận CNTT ảo của bạn.",
            "desc": "Dành cho doanh nghiệp không có đội ngũ CNTT nội bộ. Chúng tôi xử lý mọi thứ từ máy tính để bàn đến bảo mật, đóng vai trò là đối tác công nghệ chuyên trách của bạn.",
            "helpdesk_title": "Hỗ trợ & Helpdesk CNTT",
            "helpdesk_desc": "Hỗ trợ từ xa và tại chỗ không giới hạn cho đội ngũ của bạn. Thời gian giải quyết nhanh chóng và các chuyên gia thân thiện sẵn sàng giúp đỡ.",
            "security_title": "Bảo mật được Quản lý (MSSP)",
            "security_desc": "Diệt virus thế hệ mới, bảo vệ chống ransomware, quản lý tường lửa và săn tìm mối đe dọa 24/7 để giữ an toàn dữ liệu.",
            "backup_title": "Sao lưu & Khôi phục Thảm họa",
            "backup_desc": "Sao lưu hàng ngày tự động và các kế hoạch khôi phục nhanh chóng đảm bảo dữ liệu kinh doanh của bạn không bao giờ bị mất và luôn có thể truy cập.",
            "monitoring_title": "Giám sát Chủ động",
            "monitoring_desc": "Chúng tôi khắc phục sự cố trước khi chúng làm gián đoạn bạn. Giám sát máy chủ, mạng và điểm cuối theo thời gian thực suốt ngày đêm.",
            "btn_quote": "Nhận báo giá quản lý"
        },
        "insights": {
            "label": "DANH MỤC",
            "title": "Thông tin chi tiết & Nghiên cứu điển hình",
            "desc": "Các ví dụ thực tế về cách chúng tôi giải quyết những thách thức phức tạp và thúc đẩy chuyển đổi số.",
            "case1_tag": "Blockchain",
            "case1_title": "Blockchain trong Chuỗi cung ứng",
            "case1_desc": "Triển khai mạng lưới blockchain riêng tư để đảm bảo tính minh bạch từ đầu đến cuối và khả năng truy xuất nguồn gốc bất biến cho logistics toàn cầu.",
            "case1_footer": "Truy xuất nguồn gốc",
            "case2_tag": "Fintech",
            "case2_title": "Hệ sinh thái Ví điện tử",
            "case2_desc": "Phát triển hệ sinh thái siêu ứng dụng tích hợp mạng xã hội với cổng thanh toán ví điện tử an toàn, xử lý khối lượng giao dịch ngan hàng lớn.",
            "case2_footer": "Thanh toán",
            "case3_tag": "Quy mô lớn",
            "case3_title": "Quy mô & Khả năng phục hồi iGaming",
            "case3_desc": "Kiến trúc hạ tầng microservices có khả năng phục hồi cao, có thể mở rộng để hỗ trợ hàng triệu người dùng đồng thời trong các sự kiện game cao điểm.",
            "case3_footer": "Khả năng mở rộng",
            "case4_tag": "Chiến lược",
            "case4_title": "Chiến lược Tiếp thị Thành công",
            "case4_desc": "Thực hiện chiến lược tiếp thị kỹ thuật số dựa trên dữ liệu sử dụng phân tích AI để tối ưu hóa chi tiêu quảng cáo, mang lại mức tăng ROI 300% cho khách hàng bán lẻ.",
            "case4_footer": "Tăng trưởng"
        },
        "footer": {
            "copyright": "&copy; 2025 JMAD Solutions. Đã đăng ký bản quyền."
        }
    },
    "ko": {
        "nav": {
            "innovation": "혁신",
            "managed_ops": "관리형 운영",
            "partners": "파트너",
            "insights": "인사이트",
            "about": "소개",
            "get_started": "시작하기"
        },
        "hero": {
            "title_line1": "귀사의 전략적 기술 파트너.",
            "title_line2": "스타트업부터 엔터프라이즈까지.",
            "subtitle": "우리는 비즈니스 목표와 기술 실행 사이의 격차를 해소합니다. B2C 스타트업이든, 가상 IT 부서가 필요한 중소기업이든, 핀테크 솔루션을 구축하는 대기업이든 JMAD가 해결해 드립니다.",
            "btn_solutions": "솔루션 보기",
            "btn_talk": "전문가 상담"
        },
        "services": {
            "label": "혁신",
            "title": "디지털 성장 및 엔지니어링.",
            "desc": "우리는 단순히 소프트웨어만 개발하지 않습니다. 비즈니스를 구축합니다. 고효율 마케팅부터 엔터프라이즈급 애플리케이션까지.",
            "marketing_title": "디지털 마케팅",
            "marketing_desc": "데이터 기반 성장 전략. SEO, SEM 및 퍼포먼스 마케팅을 통해 사용자 기반을 확장하고 ROI를 극대화합니다.",
            "web_title": "웹 개발",
            "web_desc": "Next.js와 React로 구축된 현대적이고 반응형이며 매우 빠른 웹 애플리케이션. 모든 규모에 맞는 엔터프라이즈 성능.",
            "app_title": "모바일 앱 개발",
            "app_desc": "iOS 및 Android용 네이티브 및 크로스 플랫폼 모바일 경험. 아름답고 직관적이며 참여를 유도하도록 설계되었습니다.",
            "ui_title": "UI/UX 디자인",
            "ui_desc": "세계적 수준의 디자인 시스템과 인터페이스. 기능만큼이나 아름다운 사용자 여정을 만듭니다."
        },
        "partners": {
            "label": "인프라",
            "title": "전략적 클라우드 파트너",
            "desc": "세계 최고의 클라우드 플랫폼을 활용합니다."
        },
        "about": {
            "title": "미래의 IT를 위해 구축되었습니다.",
            "desc1": "JMAD는 복잡한 엔터프라이즈 기술과 접근 가능한 비즈니스 솔루션 간의 격차를 해소하기 위해 설립되었습니다. 단순한 지원 티켓 처리가 아닌, 귀사의 전략적 기술 파트너입니다.",
            "desc2": "우리의 미션은 탄력적인 인프라, 능동적인 보안, 성장을 주도하는 디지털 경험으로 기업에 힘을 실어주는 것입니다.",
            "btn_learn": "회사 소개 더보기",
            "list_certified": "공인 클라우드 아키텍트 (AWS/Azure)",
            "list_monitoring": "24/7 능동형 모니터링 센터",
            "list_security": "엔터프라이즈급 사이버 보안",
            "list_uptime": "99.9% 가동 시간 SLA 보장",
            "list_global": "글로벌 전략적 파트너십"
        },
        "msp": {
            "label": "관리형 운영",
            "title": "귀사의 가상 IT 부서.",
            "desc": "사내 IT 팀이 없는 기업을 위해. 데스크톱부터 보안까지 모든 것을 처리하여 전담 기술 파트너 역할을 합니다.",
            "helpdesk_title": "IT 헬프데스크 및 지원",
            "helpdesk_desc": "팀을 위한 무제한 원격 및 현장 지원. 빠른 해결 시간과 친절한 전문가들이 도와드립니다.",
            "security_title": "관리형 보안 (MSSP)",
            "security_desc": "차세대 바이러스 백신, 랜섬웨어 보호, 방화벽 관리 및 24/7 위협 탐지로 데이터를 안전하게 보호합니다.",
            "backup_title": "백업 및 재해 복구",
            "backup_desc": "자동 일일 백업 및 신속한 복구 계획으로 비즈니스 데이터 유실을 방지하고 항상 액세스할 수 있도록 보장합니다.",
            "monitoring_title": "능동형 모니터링",
            "monitoring_desc": "문제가 발생하기 전에 해결합니다. 서버, 네트워크 및 엔드포인트를 24시간 실시간으로 모니터링합니다.",
            "btn_quote": "관리형 서비스 견적 받기"
        },
        "insights": {
            "label": "포트폴리오",
            "title": "엔지니어링 인사이트 및 사례 연구",
            "desc": "복잡한 과제를 해결하고 디지털 전환을 주도하는 실제 사례입니다.",
            "case1_tag": "블록체인",
            "case1_title": "공급망 블록체인",
            "case1_desc": "글로벌 물류를 위한 엔드투엔드 투명성과 불변의 추적성을 보장하는 프라이빗 블록체인 네트워크를 구축하여 분쟁을 90% 줄였습니다.",
            "case1_footer": "추적성",
            "case2_tag": "핀테크",
            "case2_title": "전자 지갑 생태계",
            "case2_desc": "소셜 미디어와 안전한 전자 지갑 결제 게이트웨이를 통합한 슈퍼 앱 생태계를 개발하여 대용량 P2P 거래를 처리했습니다.",
            "case2_footer": "결제",
            "case3_tag": "대규모",
            "case3_title": "iGaming 확장성 및 탄력성",
            "case3_desc": "피크 게임 이벤트 기간 동안 수백만 명의 동시 사용자를 지원할 수 있도록 확장 가능한 고탄력성 마이크로서비스 인프라를 설계했습니다.",
            "case3_footer": "확장성",
            "case4_tag": "전략",
            "case4_title": "마케팅 성공 전략",
            "case4_desc": "AI 분석을 활용한 데이터 기반 디지털 마케팅 전략을 실행하여 광고 지출을 최적화하고 소매 고객의 ROI를 300% 증가시켰습니다.",
            "case4_footer": "성장"
        },
        "footer": {
            "copyright": "&copy; 2025 JMAD Solutions. All rights reserved."
        }
    },
    "th": {
        "nav": {
            "innovation": "นวัตกรรม",
            "managed_ops": "บริการจัดการระบบ",
            "partners": "พันธมิตร",
            "insights": "ข้อมูลเชิงลึก",
            "about": "เกี่ยวกับเรา",
            "get_started": "เริ่มต้นใช้งาน"
        },
        "hero": {
            "title_line1": "พันธมิตรทางเทคโนโลยีเชิงกลยุทธ์ของคุณ",
            "title_line2": "จากสตาร์ทอัพสู่อองค์กรระดับใหญ่",
            "subtitle": "เราเชื่อมช่องว่างระหว่างเป้าหมายทางธุรกิจและการดำเนินการทางเทคนิค ไม่ว่าคุณจะเป็นสตาร์ทอัพ B2C, SME ที่ต้องการแผนกไอทีเสมือน หรือองค์กรที่สร้างโซลูชัน Fintech, JMAD พร้อมส่งมอบความสำเร็จ",
            "btn_solutions": "โซลูชันของเรา",
            "btn_talk": "ปรึกษาผู้เชี่ยวชาญ"
        },
        "services": {
            "label": "นวัตกรรม",
            "title": "การเติบโตทางดิจิทัล & วิศวกรรม",
            "desc": "เราไม่เพียงแค่สร้างซอฟต์แวร์ แต่เราสร้างธุรกิจ ตั้งแต่การตลาดที่มีอัตราการแปลงสูงไปจนถึงแอปพลิเคชันระดับองค์กร",
            "marketing_title": "การตลาดดิจิทัล",
            "marketing_desc": "กลยุทธ์การเติบโตที่ขับเคลื่อนด้วยข้อมูล SEO, SEM และการตลาดแบบมุ่งเน้นผลลัพธ์เพื่อขยายฐานผู้ใช้และเพิ่ม ROI สูงสุด",
            "web_title": "การพัฒนาเว็บไซต์",
            "web_desc": "เว็บแอปพลิเคชันที่ทันสมัย รองรับทุกอุปกรณ์ และรวดเร็ว สร้างด้วย Next.js และ React ประสิทธิภาพระดับองค์กรสำหรับทุกขนาด",
            "app_title": "การพัฒนาแอปมือถือ",
            "app_desc": "ประสบการณ์มือถือแบบ Native และ Cross-platform สำหรับ iOS และ Android สวยงาม ใช้งานง่าย และสร้างมาเพื่อการมีส่วนร่วม",
            "ui_title": "การออกแบบ UI/UX",
            "ui_desc": "ระบบการออกแบบและอินเทอร์เฟซระดับโลก เราสร้างเส้นทางของผู้ใช้ที่สวยงามพอๆ กับฟังก์ชันการทำงาน"
        },
        "partners": {
            "label": "โครงสร้างพื้นฐาน",
            "title": "พันธมิตรคลาวด์เชิงกลยุทธ์",
            "desc": "เราใช้ประโยชน์จากแพลตฟอร์มคลาวด์ที่ดีที่สุดของโลก"
        },
        "about": {
            "title": "สร้างเพื่ออนาคตของไอที",
            "desc1": "JMAD ก่อตั้งขึ้นเพื่อเชื่อมช่องว่างระหว่างเทคโนโลยีองค์กรที่ซับซ้อนและโซลูชันทางธุรกิจที่เข้าถึงได้ เราไม่ใช่แค่ฝ่ายรับแจ้งปัญหา แต่เราคือพันธมิตรทางเทคโนโลยีเชิงกลยุทธ์ของคุณ",
            "desc2": "ภารกิจของเราคือการเสริมศักยภาพให้ธุรกิจด้วยโครงสร้างพื้นฐานที่ยืดหยุ่น ความปลอดภัยเชิงรุก และประสบการณ์ดิจิทัลที่ขับเคลื่อนการเติบโต",
            "btn_learn": "เรียนรู้เพิ่มเติมเกี่ยวกับเรา",
            "list_certified": "สถาปนิกคลาวด์ที่ได้รับการรับรอง (AWS/Azure)",
            "list_monitoring": "ศูนย์เฝ้าระวังเชิงรุก 24/7",
            "list_security": "ความปลอดภัยทางไซเบอร์ระดับองค์กร",
            "list_uptime": "การันตี SLA ความพร้อมใช้งาน 99.9%",
            "list_global": "พันธมิตรเชิงกลยุทธ์ระดับโลก"
        },
        "msp": {
            "label": "การดำเนินงานที่มีการจัดการ",
            "title": "แผนกไอทีเสมือนของคุณ",
            "desc": "สำหรับธุรกิจที่ไม่มีทีมไอทีภายใน เราจัดการทุกอย่างตั้งแต่เดสก์ท็อปไปจนถึงความปลอดภัย เปรียบเสมือนพันธมิตรทางเทคโนโลยีเฉพาะของคุณ",
            "helpdesk_title": "IT Helpdesk & Support",
            "helpdesk_desc": "การสนับสนุนระยะไกลและนอกสถานที่แบบไม่จำกัดสำหรับทีมของคุณ เวลาแก้ไขที่รวดเร็วและผู้เชี่ยวชาญที่เป็นมิตรพร้อมช่วยเหลือ",
            "security_title": "ความปลอดภัยที่มีการจัดการ (MSSP)",
            "security_desc": "Antivirus ยุคใหม่, การป้องกัน Ransomware, การจัดการ Firewall และการค้นหาภัยคุกคาม 24/7 เพื่อรักษาข้อมูลให้ปลอดภัย",
            "backup_title": "การสำรองข้อมูล & กู้คืนภัยพิบัติ",
            "backup_desc": "แผนการสำรองข้อมูลรายวันอัตโนมัติและการกู้คืนที่รวดเร็ว เพื่อให้มั่นใจว่าข้อมูลธุรกิจของคุณจะไม่สูญหายและเข้าถึงได้เสมอ",
            "monitoring_title": "การเฝ้าระวังเชิงรุก",
            "monitoring_desc": "เราแก้ไขปัญหาก่อนที่จะรบกวนคุณ การเฝ้าระวังเซิร์ฟเวอร์ เครือข่าย และอุปกรณ์ปลายทางแบบเรียลไทม์ตลอด 24 ชั่วโมง",
            "btn_quote": "ขอใบเสนอราคา"
        },
        "insights": {
            "label": "ผลงาน",
            "title": "ข้อมูลเชิงลึกทางวิศวกรรม & กรณีศึกษา",
            "desc": "ตัวอย่างจริงของวิธีที่เราแก้ปัญหาความท้าทายที่ซับซ้อนและขับเคลื่อนการเปลี่ยนแปลงทางดิจิทัล",
            "case1_tag": "Blockchain",
            "case1_title": "Blockchain ในห่วงโซ่อุปทาน",
            "case1_desc": "วางระบบเครือข่าย Blockchain ส่วนตัวเพื่อรับรองความโปร่งใสแบบ End-to-End และการตรวจสอบย้อนกลับที่แก้ไขไม่ได้สำหรับโลจิสติกส์ทั่วโลก ลดข้อพิพาทได้ 90%",
            "case1_footer": "ตรวจสอบย้อนกลับ",
            "case2_tag": "Fintech",
            "case2_title": "ระบบนิเวศ E-Wallet",
            "case2_desc": "พัฒนาระบบนิเวศ Super-app ที่รวมโซเชียลมีเดียเข้ากับเกตเวย์การชำระเงิน E-Wallet ที่ปลอดภัย รองรับธุรกรรม P2P ปริมาณมาก",
            "case2_footer": "การชำระเงิน",
            "case3_tag": "High Scale",
            "case3_title": "ความยืดหยุ่น & การขยายตัวของ iGaming",
            "case3_desc": "ออกแบบโครงสร้างพื้นฐาน Microservices ที่มีความยืดหยุ่นสูง สามารถขยายเพื่อรองรับผู้ใช้งานพร้อมกันหลายล้านคนในช่วงกิจกรรมเกมที่มีผู้เล่นสูงสุด",
            "case3_footer": "การขยายขนาด",
            "case4_tag": "กลยุทธ์",
            "case4_title": "กลยุทธ์การตลาดที่ประสบความสำเร็จ",
            "case4_desc": "ดำเนินกลยุทธ์การตลาดดิจิทัลที่ขับเคลื่อนด้วยข้อมูลโดยใช้การวิเคราะห์ AI เพื่อเพิ่มประสิทธิภาพการใช้จ่ายโฆษณา ส่งผลให้ ROI เพิ่มขึ้น 300% สำหรับลูกค้าค้าปลีก",
            "case4_footer": "การเติบโต"
        },
        "footer": {
            "copyright": "&copy; 2025 JMAD Solutions. สงวนลิขสิทธิ์."
        }
    }
};

class I18n {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        // 1. Try to get from localStorage
        const savedLang = localStorage.getItem('jmad_lang');

        // 2. Or detect from browser
        const browserLang = navigator.language.split('-')[0];

        // 3. Set initial language (fallback to 'en' if not supported)
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (translations[browserLang]) {
            this.currentLang = browserLang;
        } else {
            this.currentLang = 'en';
        }

        // Apply translations
        this.setLanguage(this.currentLang);

        // Bind language switcher events
        this.bindEvents();
    }

    bindEvents() {
        const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.value = this.currentLang;
            switcher.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }

    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not found, falling back to English.`);
            lang = 'en';
        }

        this.currentLang = lang;
        localStorage.setItem('jmad_lang', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update switcher value if it exists
        const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.value = lang;
        }

        this.render();
    }

    render() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');

            let value = translations[this.currentLang];

            // Traverse the object to find the value
            let valid = true;
            for (const k of keys) {
                if (value && value[k]) {
                    value = value[k];
                } else {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                // Handle different element types
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = value;
                } else {
                    el.innerHTML = value;
                }
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${this.currentLang}`);
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});
