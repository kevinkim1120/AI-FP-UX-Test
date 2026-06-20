// Mock Database of Customers and Contracts
const customerDb = [
    {
        id: 1,
        name: "김*수",
        birth: "81.07.02",
        gender: "남성",
        genderCode: "male",
        contracts: [
            { name: "(무)한화생명 실손의료비보장보험", policyNo: "211078990", date: "2021.10.01", price: "38,000원", riders: "4개", summary: "질병/상해 입원의료비 최대 5,000만원 한도로 실제 부담한 의료비를 비급여 80%, 급여 90% 보장하는 기본 실손 보험입니다." },
            { name: "(무)한화생명 CI보장보험", policyNo: "181107895", date: "2015.07.20", price: "215,050원", riders: "8개", summary: "사망 보장과 더불어 중대한 질병(CI) 발생 시 주계약 선지급 및 진단비, 수술비를 종합적으로 제공하는 보장성 보험입니다." }
        ],
        gaps: [
            "뇌혈관질환 진단비 및 수술비 보장 부재 (보강 필요)",
            "허혈성심장질환 진단비 한도 부족 (현재 급성심근경색만 2천만원 가입)"
        ]
    },
    {
        id: 2,
        name: "이*희",
        birth: "88.04.12",
        gender: "여성",
        genderCode: "female",
        contracts: [
            { name: "(무)한화생명 시그니처암보험", policyNo: "230504123", date: "2023.05.04", price: "85,000원", riders: "5개", summary: "암 진단, 치료, 수술에 특화되어 일반암 진단 시 최대 5,000만원을 일시금 지급하는 특화형 암 전용 상품입니다." },
            { name: "(무)한화생명 스마트여성건강보험", policyNo: "200812345", date: "2020.08.12", price: "68,000원", riders: "6개", summary: "여성 특정 질환 수술 및 유방암, 부인과 질환 진단 한도를 집중 보장하는 여성 특화 건강 상품입니다." }
        ],
        gaps: [
            "실손의료비 보험 미가입 상태 (기본적인 병원비 실손 보장 필요)",
            "뇌/심장 2대 질병에 대한 진단비 보장 전혀 없음"
        ]
    },
    {
        id: 3,
        name: "박*수",
        birth: "74.11.23",
        gender: "남성",
        genderCode: "male",
        contracts: [
            { name: "(무)한화생명 백세건강간병보험", policyNo: "190205678", date: "2019.02.05", price: "110,000원", riders: "3개", summary: "장기요양등급 판정 시 간병 생활자금 및 치매 진단비를 종신토록 보장하는 실버 간병 상품입니다." }
        ],
        gaps: [
            "3대 질병 (암, 뇌혈관, 허혈성심장질환) 진단자금 일체 없음 (종합 건강보장 공백 심각)",
            "실손의료비 특약 미가입 상태"
        ]
    },
    {
        id: 4,
        name: "김*수",
        birth: "74.05.15",
        gender: "남성",
        genderCode: "male",
        contracts: [
            { name: "(무)한화생명 스마트통합종신보험", policyNo: "150824991", date: "2015.08.24", price: "185,000원", riders: "5개", summary: "사망보장 및 암 진단비 정액 지급이 연계된 하이브리드 종신형 보장 상품입니다." }
        ],
        gaps: [
            "실손의료비보장보험 미가입 (기본 실비 보장 필요)",
            "뇌/심장 2대 질병에 대한 진단비 보장 전혀 없음"
        ]
    }
];

// Mock Document Database for the Right Panel
const documentDb = {
    doc_smart_life_12: {
        title: "(무)한화생명 스마트통합종신보험 약관",
        meta: "분류: 종신보험 | 제12조 (사망보험금의 지급사유) | 개정일: 2024-01-01",
        sections: [
            {
                title: "제1항 지급 사유",
                content: "회사는 피보험자가 보험기간 중 사망하였을 때에는 보험계약자 또는 피보험자가 지정한 보험수익자에게 주계약 가입금액(1억원)을 사망보험금으로 지급합니다."
            },
            {
                title: "제2항 지급 제한 사항 (보장하지 않는 원인)",
                content: "다음 중 어느 한 가지로 피보험자가 사망한 경우 회사는 사망보험금을 지급하지 아니하거나 제한할 수 있습니다.<br>1. 피보험자가 고의로 자신을 해친 경우 (단, 계약일로부터 2년이 지난 후 자살한 경우에는 사망보험금을 지급합니다)<br>2. 보험수익자가 고의로 피보험자를 해친 경우<br>3. 보험계약자가 고의로 피보험자를 해친 경우"
            }
        ],
        highlight: "💡 FP Tip: 자살 면책 기간(2년) 확인 및 고의적 사고 여부가 심사 포인트입니다. 김철수 고객님은 가입 15년차이므로 지급 사유 발생 시 문제없이 보장됩니다."
    },
    doc_smart_life_14: {
        title: "(무)한화생명 스마트통합종신보험 약관",
        meta: "분류: 종신보험 | 제14조 (보험료 납입 면제) | 개정일: 2024-01-01",
        sections: [
            {
                title: "제1항 납입면제 요건",
                content: "피보험자가 보험기간 중 보장개시일 이후에 차기 이후의 보험료 납입기일 전일까지 동일한 재해 또는 재해 이외의 동일한 원인으로 여러 장해상태의 장해지급률을 더하여 <b>50% 이상</b>인 장해상태가 되었을 때에는 회사는 약관이 정하는 바에 따라 차회 이후의 보장보험료 납입을 면제합니다."
            },
            {
                title: "제2항 제출 서류",
                content: "납입면제를 신청할 때에는 장해진단서, 주민등록등본, 신분증 사본을 회사에 제출하여 확인을 받아야 합니다."
            }
        ],
        highlight: "💡 FP Tip: 장해지급률 합산 50% 요건이 중요하며, 여러 부위 장해 시 합산 기준을 확인해야 합니다. 실손의료비는 별도 갱신 보험료가 있어 주계약 면제 시에도 실손 특약 보험료는 계속 납부해야 할 수 있습니다."
    },
    doc_signature_cancer_5: {
        title: "(무)한화생명 시그니처암보험 약관",
        meta: "분류: 암보험 | 제5조 (암의 정의 및 진단확정) | 개정일: 2025-05-10",
        sections: [
            {
                title: "제1항 암의 정의",
                content: "이 계약에 있어서 '암'이라 함은 제8차 개정 한국표준질병사인분류(KCD) 중 악성신생물로 분류되는 질병을 말합니다. 다만, 대장점막내암, 초기 전문의 소견 암 등 일부 소액암은 제외하거나 축소 보장합니다."
            },
            {
                title: "제2항 진단확정 기준",
                content: "암의 진단확정은 해부병리 또는 임상병리의 전문의사 자격을 가진 자에 의하여 내려져야 하며, 조직검사, 미세바늘흡인검사 또는 혈액검사에 대한 현미경 소견을 기초로 하여야 합니다. 병리 진단이 불가능할 경우 임상학적 진단이 인정되는 기준을 만족하여야 합니다."
            }
        ],
        highlight: "💡 FP Tip: 단순 임상 소견(코드 부여)만으로는 암 진단비가 지급되지 않으며, 반드시 병리 검사 결과보고서상 현미경 소견 확인이 동반되어야 함을 고객에게 사전 안내해 주세요."
    },
    manual_fp_securities: {
        title: "FP 증권 분석 업무 매뉴얼",
        meta: "분류: 업무매뉴얼 | 코드: FP-MANUAL-03 | 제정일: 2026-02-15",
        sections: [
            {
                title: "제1조 목적 및 분석 단계",
                content: "본 매뉴얼은 FP가 고객 보유 계약 정보를 바탕으로 빈틈없는 보장 컨설팅을 제공하기 위해 준수할 단계를 규정합니다.<br>1단계: 고객 정보 연동 및 동의 확인<br>2단계: 생명/손해 전사 보장 데이터 수집<br>3단계: 3대 진단자금(암, 뇌, 심장) 금액대 및 보장범위 평가<br>4단계: 실손의료비 유무 및 갱신 주기 확인<br>5단계: 보장 공백(Gap) 컨설팅 및 신규 상품 설계 연계"
            },
            {
                title: "제2조 연령별 핵심 보장 한도 기준",
                content: "30~40대 경제활동기 고객의 경우 사망보장(연소득의 3~5배), 암 진단비(최소 5천만원 이상), 뇌/심장질환 치료비 및 수술비(각 3천만원 이상)를 표준 포트폴리오로 권장합니다."
            }
        ],
        highlight: "💡 FP Tip: 보장 공백 안내 시 고객의 불안감을 자극하기보다, 기존 계약의 가치를 먼저 긍정하고 부족한 부분을 합리적으로 보완하도록 유도하는 것이 효과적입니다."
    },
    manual_claim_doc: {
        title: "보험금 청구 필수 서류 안내 매뉴얼",
        meta: "분류: 청구업무 | 코드: CLAIM-DOC-01 | 개정일: 2026-03-01",
        sections: [
            {
                title: "1. 공통 필수 서류",
                content: "모든 보장성 보험금 청구 시 공통 제출 서류입니다.<br>- 보험금청구서 (회사 양식, 계좌번호 포함)<br>- 청구인 신분증 사본 및 개인정보동의서"
            },
            {
                title: "2. 청구 사유별 추가 서류",
                content: "<b>[실손 통원의료비]</b><br>- 진료비 계산서(영수증), 진료비 세부내역서 (급여/비급여 구분 필수)<br>- 질병분류코드가 기재된 처방전 (또는 소견서, 통원확인서)<br><br><b>[입원의료비]</b><br>- 진단서 또는 입퇴원확인서 (입원 기간 및 사유 명시)<br>- 진료비 세부내역서 및 영수증<br><br><b>[암 진단비]</b><br>- 진단서 원본<br>- 조직검사결과보고서 (병리 진단 확인 필수)"
            }
        ],
        highlight: "💡 FP Tip: 3만원 이하 소액 실손 통원비는 영수증과 질병코드 처방전만으로 간편 모바일 청구가 가능함을 고객에게 안내 시 만족도가 높습니다."
    }
};

// Application State Manager
const appState = {
    activeTab: 'A', // 'A', 'B', 'C', or 'D'
    chatState: {
        A: {
            selectedCustomer: null,
            selectedContracts: [], // List of active policy numbers in chat
            messages: []
        },
        B: {
            selectedCustomer: null,
            selectedContracts: [],
            messages: []
        },
        C: {
            selectedCustomer: null,
            selectedContracts: [],
            messages: []
        },
        D: {
            selectedCustomer: null,
            selectedContracts: [],
            messages: []
        }
    },
    feedback: {
        preferredOption: null,
        stars: 0,
        comment: ""
    }
};

// DOM Elements
const docPanel = document.getElementById('docPanel');
const docPanelBody = document.getElementById('docPanelBody');
const modalOverlay = document.getElementById('modalOverlay');
const customerListContainer = document.getElementById('customerListContainer');
const feedbackPanel = document.getElementById('feedbackPanel');
const ratingStars = document.getElementById('ratingStars');
const feedbackFormTab = document.getElementById('feedbackFormTab');
const feedbackStatsTab = document.getElementById('feedbackStatsTab');
const feedbackFormView = document.getElementById('feedbackFormView');
const feedbackStatsView = document.getElementById('feedbackStatsView');
let welcomeContainerNode = null;

// Initialize Chat History Lists with Default Welcome message
const initialWelcomeMessage = (option) => {
    return {
        id: 'welcome',
        sender: 'ai',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        text: "안녕하십니까! 한화생명 상담 PLUS AI 비서입니다. 상품 분석, 약관 해석, 보험금 청구 검토 및 업무 매뉴얼 조회가 가능합니다.<br><br>특정 고객의 계약 정보를 기반으로 보장 범위나 부족 보장을 분석하고 싶으시다면, 고객 정보를 연동해 주세요.",
        isWelcome: true
    };
};

// Start application
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active state in HTML body
    document.body.classList.add('option-a-active');
    
    // Store reference to welcome container before it gets detached
    welcomeContainerNode = document.getElementById('welcomeContainer');
    
    // Set initial welcome messages
    appState.chatState.A.messages.push(initialWelcomeMessage('A'));
    appState.chatState.B.messages.push(initialWelcomeMessage('B'));
    appState.chatState.C.messages.push(initialWelcomeMessage('C'));
    appState.chatState.D.messages.push(initialWelcomeMessage('D'));
    
    // Bind all event listeners
    bindEvents();
    
    // Render initial view
    updateHeaderControls();
    renderChat();
    renderSidebarContext();
    renderCustomerList();
    renderStats();
});

// Event Bindings
function bindEvents() {
    // 1. Top Comparison Tabs
    document.getElementById('tabBtnA').addEventListener('click', () => switchOption('A'));
    document.getElementById('tabBtnB').addEventListener('click', () => switchOption('B'));
    document.getElementById('tabBtnC').addEventListener('click', () => switchOption('C'));
    document.getElementById('tabBtnD').addEventListener('click', () => switchOption('D'));
    
    // 2. Chat Input and Send
    const chatInput = document.getElementById('chatInput');
    document.getElementById('btnSend').addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            // If smart badge is showing and Enter is pressed, accept it instead of sending raw text!
            const badge = document.getElementById('smartFloatingBadge');
            if (badge && badge.classList.contains('open')) {
                acceptSmartBadge();
            } else {
                handleSend();
            }
        }
    });

    // Option C: Autocomplete list keyup trigger
    chatInput.addEventListener('input', handleChatInputType);
    chatInput.addEventListener('keyup', handleChatInputKeyup);

    // Close autocomplete when clicking outside
    document.addEventListener('click', (e) => {
        const popup = document.getElementById('autocompletePopup');
        if (popup && !popup.contains(e.target) && e.target !== chatInput) {
            hideAutocomplete();
        }
    });

    // Smart floating badge accept/close buttons
    document.getElementById('btnBadgeAccept').addEventListener('click', acceptSmartBadge);
    document.getElementById('btnBadgeClose').addEventListener('click', hideSmartBadge);

    // Option D: Large [👤 고객 선택] button next to text input
    document.getElementById('btnOptDSelect').addEventListener('click', openCustomerSelector);

    // Option B: Checkbox toggle for inline customer list
    const optBCheckbox = document.getElementById('optBCheckbox');
    if (optBCheckbox) {
        optBCheckbox.addEventListener('change', (e) => {
            if (appState.activeTab !== 'B') return;
            if (e.target.checked) {
                if (!appState.chatState.B.selectedCustomer) {
                    showChatCustomerList();
                }
            } else {
                // Reset B안 selected customer context cleanly and restore welcome message
                appState.chatState.B.selectedCustomer = null;
                appState.chatState.B.selectedContracts = [];
                updateHeaderControls();
                renderCustomerList();
                renderSidebarContext();
                
                appState.chatState.B.messages = [initialWelcomeMessage('B')];
                renderChat();
            }
        });
    }

    // C안: Sidebar customer search
    const sidebarSearchInput = document.getElementById('sidebarSearchInput');
    const btnSidebarSearchClear = document.getElementById('btnSidebarSearchClear');
    
    sidebarSearchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        btnSidebarSearchClear.style.display = query.trim() ? 'block' : 'none';
        renderSidebarSearchResults(query);
    });

    btnSidebarSearchClear.addEventListener('click', () => {
        sidebarSearchInput.value = '';
        btnSidebarSearchClear.style.display = 'none';
        renderSidebarSearchResults('');
        sidebarSearchInput.focus();
    });

    // 3. New Chat Button
    document.getElementById('btnNewChat').addEventListener('click', resetChat);

    // 4. Modal Close
    document.getElementById('btnModalClose').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // 5. Document Close
    document.getElementById('btnDocClose').addEventListener('click', closeDocPanel);

    // 6. Feedback Toggle & Panels
    document.getElementById('btnFeedbackToggle').addEventListener('click', toggleFeedbackPanel);
    document.getElementById('btnFeedbackClose').addEventListener('click', toggleFeedbackPanel);
    
    feedbackFormTab.addEventListener('click', () => switchFeedbackView('form'));
    feedbackStatsTab.addEventListener('click', () => switchFeedbackView('stats'));

    // Stars Rating
    ratingStars.addEventListener('click', (e) => {
        if (e.target.classList.contains('star')) {
            const val = parseInt(e.target.dataset.value);
            setFeedbackStars(val);
        }
    });

    // Submit Feedback
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedbackSubmit);
    document.getElementById('btnExportCsv').addEventListener('click', exportFeedbackCsv);

    // Dynamic Preference Options in Feedback Form
    document.querySelectorAll('.pref-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.pref-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            appState.feedback.preferredOption = card.dataset.pref;
        });
    });

    // 7. Option A Specific Control Clicks
    document.getElementById('optAControl').addEventListener('click', openCustomerSelector);

    // 8. Announcement Banner Event Listeners
    const announceModal = document.getElementById('announceModalOverlay');
    document.getElementById('announcementBanner').addEventListener('click', () => {
        announceModal.classList.add('open');
    });
    document.getElementById('btnAnnounceModalClose').addEventListener('click', () => {
        announceModal.classList.remove('open');
    });
    announceModal.addEventListener('click', (e) => {
        if (e.target === announceModal) announceModal.classList.remove('open');
    });
}

// Updates the option-specific header elements based on context
function updateHeaderControls() {
    const option = appState.activeTab;
    if (option !== 'A' && option !== 'B') return; // C and D have no header controls
    
    const customer = appState.chatState[option].selectedCustomer;
    
    if (option === 'A') {
        const optAControl = document.getElementById('optAControl');
        const optADetails = document.getElementById('optADetails');
        
        if (customer) {
            optAControl.classList.add('active');
            optADetails.innerHTML = `
                <div class="opt-a-icon" style="background-color: ${customer.genderCode === 'male' ? '#3B82F6' : '#EC4899'}; color: white; border: none;">
                    ${customer.name.substring(0, 1)}
                </div>
                <div class="opt-a-text" style="color: var(--primary); font-weight: 700;">
                    ${customer.name}(${customer.birth}, ${customer.gender})
                </div>
                <span class="opt-a-disconnect" id="btnOptADisconnect">✕</span>
            `;
            document.getElementById('btnOptADisconnect').addEventListener('click', (e) => {
                e.stopPropagation(); // prevent modal opening
                clearCustomerContext();
            });
        } else {
            optAControl.classList.remove('active');
            optADetails.innerHTML = `
                <div class="opt-a-icon">👥</div>
                <div class="opt-a-text">고객 선택이 가능합니다</div>
            `;
        }
    }
}

// Switching between UX Design A, B, C, D
function switchOption(option) {
    if (appState.activeTab === option) return;
    
    appState.activeTab = option;
    
    // Toggle tab active styles
    document.getElementById('tabBtnA').classList.toggle('active', option === 'A');
    document.getElementById('tabBtnB').classList.toggle('active', option === 'B');
    document.getElementById('tabBtnC').classList.toggle('active', option === 'C');
    document.getElementById('tabBtnD').classList.toggle('active', option === 'D');
    
    // Toggle body classes for option-specific elements visibility
    document.body.classList.remove('option-a-active', 'option-b-active', 'option-c-active', 'option-d-active');
    if (option === 'A') {
        document.body.classList.add('option-a-active');
    } else if (option === 'B') {
        document.body.classList.add('option-b-active');
    } else if (option === 'C') {
        document.body.classList.add('option-c-active');
    } else if (option === 'D') {
        document.body.classList.add('option-d-active');
    }
    
    // Reset autocomplete and floating badge for C안
    hideAutocomplete();
    hideSmartBadge();
    
    // Clear sidebar search input for B안
    document.getElementById('sidebarSearchInput').value = '';
    document.getElementById('btnSidebarSearchClear').style.display = 'none';
    renderSidebarSearchResults('');

    // Update header controls for new option state
    updateHeaderControls();

    // Synchronize B checkbox state when switching tabs
    if (option === 'B') {
        const hasCustomer = !!appState.chatState.B.selectedCustomer;
        const isSelectorOpen = appState.chatState.B.messages.some(m => m.id === 'chat_cust_list');
        document.getElementById('optBCheckbox').checked = hasCustomer || isSelectorOpen;
    }

    // Refresh UI
    renderChat();
    renderSidebarContext();
    closeDocPanel();
}

// Customer Selection Modal logic
function openCustomerSelector() {
    modalOverlay.classList.add('open');
}

function closeModal() {
    modalOverlay.classList.remove('open');
}

// Renders list of customers inside the modal
function renderCustomerList() {
    customerListContainer.innerHTML = '';
    customerDb.forEach(cust => {
        const activeCust = appState.chatState[appState.activeTab].selectedCustomer;
        const isSelected = activeCust && activeCust.id === cust.id;
        
        const contractNames = cust.contracts.map(c => c.name.replace("(무)한화생명 ", "")).join(", ");
        
        const card = document.createElement('div');
        card.className = `customer-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="customer-avatar ${cust.genderCode}">
                ${cust.name.substring(0,1)}
            </div>
            <div class="customer-meta">
                <div class="customer-name-age">${cust.name} (${cust.birth} · ${cust.gender})</div>
                <div class="customer-contracts">계약 ${cust.contracts.length}건 | ${contractNames}</div>
            </div>
            <div class="customer-select-indicator"></div>
        `;
        
        card.addEventListener('click', () => selectCustomer(cust.id));
        customerListContainer.appendChild(card);
    });
}

// Selects customer context
function selectCustomer(id) {
    const customer = customerDb.find(c => c.id === id);
    const option = appState.activeTab;
    
    appState.chatState[option].selectedCustomer = customer;
    
    // Select all contracts by default
    appState.chatState[option].selectedContracts = customer.contracts.map(c => c.policyNo);
    
    updateHeaderControls();
    
    // Inject system message in chat history indicating context switch
    appState.chatState[option].messages.push({
        id: 'sys_' + Date.now(),
        sender: 'system',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        text: `📢 <b>${customer.name} (${customer.birth}, ${customer.gender})</b> 고객의 보험 계약 데이터가 연동되었습니다. 이제 대화창에서 보장 분석 및 약관 상담이 고객 맞춤형으로 진행됩니다.`
    });
    
    // Render clickable contract list inside the chat pane automatically
    const contractCards = customer.contracts.map(c => `
        <div class="chat-contract-card selected" data-policy="${c.policyNo}" onclick="toggleContractSelection(event, '${c.policyNo}')" style="background-color: #FFFFFF; padding: 12px; border-radius: 8px; margin-top: 8px; cursor: pointer; transition: all 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.05); text-align: left;">
            <div style="font-weight: 700; color: #1E293B; display: flex; justify-content: space-between; font-size: 13px; align-items: center;">
                <span style="display: inline-flex; align-items: center;"><span class="contract-checkbox"></span>${c.name}</span>
                <span onclick="event.stopPropagation(); viewProductSummary('${c.policyNo}')" style="font-size: 10px; background-color: var(--primary-light); color: var(--primary); padding: 2px 6px; border-radius: 4px; font-weight: 600; flex-shrink: 0;">요약보기 🔍</span>
            </div>
            <div style="font-size: 11px; color: var(--text-muted); margin-top: 6px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; border-top: 1px dashed #E2E8F0; padding-top: 6px;">
                <div>증권번호: <b>${c.policyNo}</b></div>
                <div>계약일자: <b>${c.date}</b></div>
                <div>월보험료: <b>${c.price}</b></div>
                <div>가입특약: <b>${c.riders}</b></div>
            </div>
        </div>
    `).join("");
    
    appState.chatState[option].messages.push({
        id: 'ai_' + Date.now(),
        sender: 'ai',
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        text: `🤖 안녕하세요, 김한화 FP님. 연동된 <b>${customer.name} (${customer.birth}, ${customer.gender})</b> 고객님의 보유 계약 목록입니다.<br>각 카드를 클릭하여 다중 선택[✓] 여부를 설정하고, 아래 추천 질문이나 입력창을 통해 보험 분석을 진행하세요.<br>${contractCards}`
    });
    
    closeModal();
    renderCustomerList();
    renderSidebarContext();
    renderChat();
}

// Global scope contract selection toggler
window.toggleContractSelection = function(event, policyNo) {
    const option = appState.activeTab;
    const selected = appState.chatState[option].selectedContracts;
    const index = selected.indexOf(policyNo);
    
    if (index > -1) {
        selected.splice(index, 1); // remove
    } else {
        selected.push(policyNo); // add
    }
    
    // Find all card elements with this policy number in the DOM and toggle class
    const cards = document.querySelectorAll(`.chat-contract-card[data-policy="${policyNo}"]`);
    cards.forEach(card => {
        card.classList.toggle('selected', index === -1);
    });
};

// Global scope product summary viewer callback from clicking chat contract cards
window.viewProductSummary = function(policyNo) {
    const option = appState.activeTab;
    const customer = appState.chatState[option].selectedCustomer;
    if (!customer) return;
    
    const contract = customer.contracts.find(c => c.policyNo === policyNo);
    if (!contract) return;
    
    const timeStr = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    
    // 1. Append user simulated action
    appState.chatState[option].messages.push({
        id: 'usr_' + Date.now(),
        sender: 'user',
        time: timeStr,
        text: `"${contract.name}" 상품 요약 보여줘.`
    });
    
    renderChat();
    
    // Simulate AI response
    const messagesContainer = document.getElementById('messagesContainer');
    const placeholderWrapper = document.createElement('div');
    placeholderWrapper.className = 'message-wrapper ai';
    placeholderWrapper.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content-box">
            <div class="message-bubble">
                <div class="loading-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        </div>
    `;
    messagesContainer.appendChild(placeholderWrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    setTimeout(() => {
        placeholderWrapper.remove();
        appState.chatState[option].messages.push({
            id: 'ai_' + Date.now(),
            sender: 'ai',
            time: timeStr,
            text: `🤖 <b>${contract.name} (증권번호: ${contract.policyNo}) 상품 요약</b>입니다:<br><br>${contract.summary}<br><br>💡 **추천 연계 질문**: "암에 걸리면 보험금 얼마나와?" 질문 칩을 누르거나 대화창에 직접 입력해 보세요.`
        });
        renderChat();
        renderSuggestions();
    }, 600);
};

// Clears active customer context
function clearCustomerContext() {
    const option = appState.activeTab;
    const oldCustomer = appState.chatState[option].selectedCustomer;
    
    appState.chatState[option].selectedCustomer = null;
    
    updateHeaderControls();
    
    if (oldCustomer) {
        appState.chatState[option].messages.push({
            id: 'sys_' + Date.now(),
            sender: 'system',
            time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
            text: `📢 고객 정보 연동이 해제되었습니다. 이제 일반 업무 매뉴얼 및 범용 상담 모드로 작동합니다.`
        });
    }
    
    renderCustomerList();
    renderSidebarContext();
    renderChat();
}

// Renders the left sidebar context summary box
function renderSidebarContext() {
    const customer = appState.chatState[appState.activeTab].selectedCustomer;
    const contextCard = document.getElementById('customerContextCard');
    
    if (customer) {
        contextCard.className = "customer-context-card active";
        contextCard.innerHTML = `
            <div class="context-title">연동된 고객 정보 (안 ${appState.activeTab})</div>
            <div class="context-details">
                <div class="context-avatar ${customer.genderCode}">${customer.name.substring(0, 1)}</div>
                <div class="context-info">
                    <div class="context-info-name">${customer.name} (${customer.birth} · ${customer.gender})</div>
                    <div class="context-info-desc">가입계약 ${customer.contracts.length}건</div>
                </div>
            </div>
        `;
    } else {
        contextCard.className = "customer-context-card";
        contextCard.innerHTML = `
            <div class="context-title">연동된 고객 정보</div>
            <div class="context-details">
                <div class="context-avatar none">?</div>
                <div class="context-info">
                    <div class="context-info-name">연동 없음</div>
                    <div class="context-info-desc">일반 모드로 질문합니다</div>
                </div>
            </div>
        `;
    }
}

// Resets/Clears the chat log
function resetChat() {
    const option = appState.activeTab;
    appState.chatState[option].messages = [initialWelcomeMessage(option)];
    clearCustomerContext();
    closeDocPanel();
}

// Renders the chat messages on screen
function renderChat() {
    const option = appState.activeTab;
    const messagesContainer = document.getElementById('messagesContainer');
    const messages = appState.chatState[option].messages;
    
    messagesContainer.innerHTML = '';
    
    if (messages.length === 1 && messages[0].isWelcome) {
        if (welcomeContainerNode) {
            welcomeContainerNode.style.display = 'flex';
            messagesContainer.appendChild(welcomeContainerNode);
        }
    } else {
        if (welcomeContainerNode) {
            welcomeContainerNode.style.display = 'none';
        }
    }
    
    messages.forEach(msg => {
        if (msg.sender === 'system') {
            const sysDiv = document.createElement('div');
            sysDiv.style.alignSelf = 'center';
            sysDiv.style.margin = '8px 0';
            sysDiv.style.padding = '6px 16px';
            sysDiv.style.backgroundColor = '#E2E8F0';
            sysDiv.style.borderRadius = '20px';
            sysDiv.style.fontSize = '12px';
            sysDiv.style.color = '#475569';
            sysDiv.style.boxShadow = 'var(--shadow-sm)';
            sysDiv.innerHTML = msg.text;
            messagesContainer.appendChild(sysDiv);
            return;
        }
        
        const wrapper = document.createElement('div');
        wrapper.className = `message-wrapper ${msg.sender}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = msg.sender === 'ai' ? '🤖' : 'FP';
        
        const contentBox = document.createElement('div');
        contentBox.className = 'message-content-box';
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = msg.text;
        
        const time = document.createElement('div');
        time.className = 'message-time';
        time.innerText = msg.time;
        
        contentBox.appendChild(bubble);
        contentBox.appendChild(time);
        
        wrapper.appendChild(avatar);
        wrapper.appendChild(contentBox);
        
        messagesContainer.appendChild(wrapper);
    });
    
    // Sync contract card selection class states in DOM with current appState
    const selected = appState.chatState[option].selectedContracts || [];
    messagesContainer.querySelectorAll('.chat-contract-card').forEach(card => {
        const policyNo = card.dataset.policy;
        const isSelected = selected.includes(policyNo);
        card.classList.toggle('selected', isSelected);
    });

    // Bind click events to citation links in rendered bubbles
    messagesContainer.querySelectorAll('.citation').forEach(cit => {
        cit.addEventListener('click', (e) => {
            e.preventDefault();
            const refId = cit.dataset.ref;
            openDocPanel(refId);
        });
    });
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Update suggestion chips at the bottom immediately
    renderSuggestions();
}

// Suggestion chips based on selected customer state and dialogue context
function renderSuggestions() {
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const option = appState.activeTab;
    const customer = appState.chatState[option].selectedCustomer;
    const messages = appState.chatState[option].messages;
    
    suggestionsContainer.innerHTML = '';
    let chips = [];
    
    // Get last AI message text if it exists (ignoring welcome)
    let lastAiMsg = null;
    for (let i = messages.length - 1; i >= 0; i--) {
        if (messages[i].sender === 'ai' && !messages[i].isWelcome) {
            lastAiMsg = messages[i];
            break;
        }
    }
    
    // Check if Option B is waiting for customer selection
    const optBCheckbox = document.getElementById('optBCheckbox');
    const isBWaitingForCustomer = (option === 'B' && optBCheckbox && optBCheckbox.checked && !customer);

    if (isBWaitingForCustomer) {
        chips = [];
    } else if (customer) {
        // If customer is selected, show questions about coverage amount, gap analysis, and summary
        chips = [
            "암에걸리면 보험금 얼마나와",
            "부족한 보장 분석해줘",
            "선택한 보험 요약해줘"
        ];
    } else {
        // General mode (no customer)
        chips = [
            "고객 증권 분석 프로세스 매뉴얼",
            "보험금 청구 필수 서류 안내",
            "종신보험 사망보장 약관 예시"
        ];
    }
    
    // Add dynamically
    chips.forEach(text => {
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';
        chip.innerText = text;
        chip.addEventListener('click', () => {
            document.getElementById('chatInput').value = text;
            handleSend();
        });
        suggestionsContainer.appendChild(chip);
    });
}

// Handle sending message
function handleSend() {
    const chatInput = document.getElementById('chatInput');
    const text = chatInput.value.trim();
    if (!text) return;
    
    const option = appState.activeTab;
    const timeStr = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    
    // 1. Append User Message
    appState.chatState[option].messages.push({
        id: 'usr_' + Date.now(),
        sender: 'user',
        time: timeStr,
        text: text
    });
    
    chatInput.value = '';
    renderChat();
    
    // 2. Simulate AI Typing response after slight delay
    simulateAiResponse(text, option);
}

// AI Dialogue Logic (Simulated with insurance expertise and context-awareness)
function simulateAiResponse(userText, option) {
    const messagesContainer = document.getElementById('messagesContainer');
    const customer = appState.chatState[option].selectedCustomer;
    const timeStr = new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    
    // Create placeholder message with loading dots
    const placeholderWrapper = document.createElement('div');
    placeholderWrapper.className = 'message-wrapper ai';
    placeholderWrapper.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content-box">
            <div class="message-bubble">
                <div class="loading-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        </div>
    `;
    messagesContainer.appendChild(placeholderWrapper);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Craft response based on text matching and customer state
    setTimeout(() => {
        // Remove typing placeholder
        placeholderWrapper.remove();
        
        let responseText = "";
        
        // Option D Homonym search triggers inside chat window if name is searched and no customer is currently loaded
        if (option === 'D' && !customer && (userText.includes("김") || userText.includes("철수") || userText.includes("김*수"))) {
            responseText = `🤖 <b>동명이인 고객 검색 결과</b>입니다.<br>
            FP님의 보유 고객 중 <b>'김*수'</b> 고객이 2명 검색되었습니다. 아래 카드 중 상담을 원하시는 고객을 터치하여 주십시오.<br><br>
            <div class="homonym-choice-container">
                <div class="homonym-grid">
                    <div class="homonym-card" onclick="selectHomonymCustomer(1)">
                        <div class="homonym-name">김*수 (81.07.02)</div>
                        <div class="homonym-meta">남성 · 45세<br>계약 2건 (실손의료비, CI보장보험)</div>
                    </div>
                    <div class="homonym-card" onclick="selectHomonymCustomer(4)">
                        <div class="homonym-name">김*수 (74.05.15)</div>
                        <div class="homonym-meta">남성 · 52세<br>계약 1건 (스마트통합종신보험)</div>
                    </div>
                </div>
            </div>`;
        }
        // Match cancer coverages specifically
        else if (userText.includes("암") && (userText.includes("얼마") || userText.includes("보험금") || userText.includes("보장"))) {
            if (customer) {
                const selectedPolicies = appState.chatState[option].selectedContracts || [];
                
                if (customer.id === 1) { // 김*수 81년생
                    const silsonChecked = selectedPolicies.includes("211078990");
                    const ciChecked = selectedPolicies.includes("181107895");
                    
                    if (silsonChecked && ciChecked) {
                        responseText = `🤖 <b>김*수 고객님의 암 보장 발생 시 예상 지급 보험금 분석입니다 (선택 상품: 실손의료비, CI보장):</b><br><br>
                        1. <b>(무)한화생명 실손의료비보장보험</b> (증권번호: 211078990)<br>
                         - 암 입원/통원 치료 및 항암 치료와 관련하여 실제 지출하신 병원 치료비가 질병입원 한도 <b>최대 5,000만원</b> 내에서 자기부담금 제외 후 실비 지급됩니다.<br><br>
                        2. <b>(무)한화생명 CI보장보험</b> (증권번호: 181107895)<br>
                         - <b>주계약 (CI 진단금 선지급)</b>: 일반암(CI 정의 충족 시) 진단 확정 시 주계약 사망보장에서 <b>2,000만원</b>이 선지급 형태로 최초 1회 정액 지급됩니다.<br>
                         - <b>중대한암진단 특약</b>: 약관 상 중대한 암에 해당하는 경우 추가로 <b>5,000만원</b>이 정액 지급됩니다.<br>
                         - <b>암수술 특약</b>: 암 치료 목적으로 수술 시 수술 1회당 <b>1,000만원</b>이 정액 지급됩니다.<br><br>
                        💡 <b>종합 안내</b>: 암 진단 시 정액 보험금으로 <b>최대 8,000만원</b>(진단비 7,000만 + 수술비 1,000만) 수령이 가능하며, 실제 병원비는 실손의료비 보험에서 <b>최대 5,000만원</b> 한도로 중복 실비 보상받을 수 있어 든든한 포트폴리오를 보유하고 계십니다. 상세 청구 기준은 <span class="citation" data-ref="manual_claim_doc">보험금 청구 필수 서류 안내 매뉴얼</span>을 참고해 주세요.`;
                    } else if (silsonChecked) {
                        responseText = `🤖 <b>김*수 고객님의 암 보장 분석 결과입니다 (선택 상품: 실손의료비보장보험 단독):</b><br><br>
                        - <b>(무)한화생명 실손의료비보장보험</b> (증권번호: 211078990)을 통해서 암 입원/통원 치료 및 약제비 등 실제 지출한 의료비가 질병입원 한도 <b>최대 5,000만원</b> 범위에서 보장(급여 90%, 비급여 80%)됩니다.<br>
                        - ⚠️ <b>주의</b>: 정액형 암 진단비는 가입되어 있지 않거나 선택에서 제외되어, 일시금으로 지급받는 정액 진단비는 0원입니다.`;
                    } else if (ciChecked) {
                        responseText = `🤖 <b>김*수 고객님의 암 보장 분석 결과입니다 (선택 상품: CI보장보험 단독):</b><br><br>
                        - <b>(무)한화생명 CI보장보험</b> (증권번호: 181107895)을 통해 일반암(CI 요건 충족 시) 진단 시 <b>최대 8,000만원</b>(주계약 선지급 2,000만 + 중대한암 특약 5,000만 + 암수술 특약 1,000만)의 정액 자금을 확보하실 수 있습니다.<br>
                        - ⚠️ <b>주의</b>: 실제 지출한 병원 치료비에 대해 실비 청구가 가능한 실손의료비 담보는 선택에서 제외되어 보장되지 않습니다.`;
                    } else {
                        responseText = `⚠️ <b>선택된 계약 카드가 없습니다.</b> 대화창의 계약 카드 체크박스[✓]를 클릭해 보장 분석 대상을 활성화해 주세요.`;
                    }
                } else if (customer.id === 2) { // 이*희
                    const cancerChecked = selectedPolicies.includes("230504123");
                    const femaleChecked = selectedPolicies.includes("200812345");
                    
                    if (cancerChecked && femaleChecked) {
                        responseText = `🤖 <b>이*희 고객님의 암 보장 발생 시 예상 지급 보험금 분석입니다 (선택 상품: 시그니처암, 스마트여성건강):</b><br><br>
                        1. <b>(무)한화생명 시그니처암보험</b> (증권번호: 230504123)<br>
                         - <b>주계약 (일반암 진단비)</b>: 일반암 확정 시 <b>5,000만원</b>이 최초 1회 정액 지급됩니다.<br>
                         - <b>소액암 진단 특약</b>: 갑상선암, 제자리암 등 소액암 진단 시 <b>2,000만원</b>이 지급됩니다.<br><br>
                        2. <b>(무)한화생명 스마트여성건강보험</b> (증권번호: 200812345)<br>
                         - <b>유방암 진단 특약</b>: 유방암 확정 시 <b>3,000만원</b>이 추가 지급됩니다.<br>
                         - <b>여성특정수술 특약</b>: 부인과 관련 및 여성 특정암 수술 시 수술 1회당 <b>500만원</b>이 정액 지급됩니다.<br><br>
                        💡 <b>종합 안내</b>: 일반암 진단 시 <b>5,000만원</b>, 유방암 진단 및 수술 시 합산 <b>최대 8,500만원</b>의 풍부한 진단자금을 확보하고 계십니다. 다만, 현재 실손의료비 보험이 미가입 상태이므로 실제 지출된 병원비 실비 청구는 불가능한 보장 공백이 있습니다. 약관 정의는 [시그니처암보험 약관 제5조](citation:doc_signature_cancer_5) 조항에서 확인 가능합니다.`;
                    } else if (cancerChecked) {
                        responseText = `🤖 <b>이*희 고객님의 암 보장 분석 결과입니다 (선택 상품: 시그니처암보험 단독):</b><br><br>
                        - <b>(무)한화생명 시그니처암보험</b> (증권번호: 230504123) 단독 분석 결과입니다.<br>
                        - 일반암 진단 시 <b>5,000만원</b>, 소액암 진단 시 <b>2,000만원</b>이 일시 정액으로 지급됩니다.<br>
                        - 스마트여성건강보험 및 병원비 실손의료비 청구는 포함되지 않습니다.`;
                    } else if (femaleChecked) {
                        responseText = `🤖 <b>이*희 고객님의 암 보장 분석 결과입니다 (선택 상품: 스마트여성건강보험 단독):</b><br><br>
                        - <b>(무)한화생명 스마트여성건강보험</b> (증권번호: 200812345) 단독 분석 결과입니다.<br>
                        - 유방암 진단 시 <b>3,000만원</b>, 부인과/여성 특정암 수술 시 <b>500만원</b>이 정액 지급됩니다.<br>
                        - 일반암 진단비 5,000만원 보장은 제외됩니다.`;
                    } else {
                        responseText = `⚠️ <b>선택된 계약 카드가 없습니다.</b> 대화창의 계약 카드 체크박스[✓]를 클릭해 주세요.`;
                    }
                } else if (customer.id === 4) { // 김*수 74년생
                    const stockChecked = selectedPolicies.includes("150824991");
                    if (stockChecked) {
                        responseText = `🤖 <b>김*수 고객님(74년생)의 암 보장이 가능한 담보 분석입니다 (선택 상품: 스마트통합종신보험):</b><br><br>
                        - 가입 중이신 <b>(무)한화생명 스마트통합종신보험</b> (증권번호: 150824991)은 사망 보장 위주의 종신보험으로, <b>암 진단비나 수술비 등 건강 관련 특약은 포함되어 있지 않습니다.</b><br>
                        - ⚠️ <b>주의</b>: 암 치료를 위한 진단비 정액 설계 및 실손의료비 담보 보완이 시급합니다.`;
                    } else {
                        responseText = `⚠️ <b>선택된 계약 카드가 없습니다.</b>`;
                    }
                } else { // 박*수
                    responseText = `🤖 <b>박*수 고객님의 암 보장 분석 결과입니다:</b><br><br>
                    현재 가입 중인 <b>(무)한화생명 백세건강간병보험</b> (증권번호: 190205678)은 치매 및 장기요양 간병 전용 상품으로, <b>일반암/소액암/수술 등 암 관련 보장 특약이 전혀 가입되어 있지 않습니다.</b><br><br>
                    ⚠️ <b>보장 공백 안내</b>: 암 진단비 보장 공백률이 100%이므로, 즉각적인 암 보장 보강 설계가 필수적입니다. 암 진단 자금 설계를 위해 <span class="citation" data-ref="manual_fp_securities">FP 증권 분석 업무 매뉴얼</span>의 표준 설계 포트폴리오를 참조해 신규 가입 설계를 안내하십시오.`;
                }
            } else {
                responseText = `⚠️ <b>고객 정보 연동이 필요합니다.</b><br><br>특정 고객의 암 진단 시 예상 보험금을 분석하려면 고객 정보를 먼저 연동해 주십시오.`;
            }
        }
        // Match product summary requested via text/suggestion chip
        else if (userText.includes("요약") || userText.includes("요약해줘")) {
            if (customer) {
                const selectedPolicies = appState.chatState[option].selectedContracts || [];
                const selectedContractsList = customer.contracts.filter(c => selectedPolicies.includes(c.policyNo));
                
                if (selectedContractsList.length === 0) {
                    responseText = `⚠️ <b>요약할 계약이 선택되지 않았습니다.</b> 대화창 내의 계약 카드 체크박스[✓]를 선택한 뒤 다시 질문해 주세요.`;
                } else {
                    let sumText = selectedContractsList.map(c => `<li><b>${c.name}</b> (증권번호: ${c.policyNo})<br>└ 요약: ${c.summary}</li>`).join("");
                    responseText = `📋 <b>선택하신 ${selectedContractsList.length}건의 보험 상품 요약입니다:</b><br><ul style="padding-left:20px; margin-top:6px;">${sumText}</ul>`;
                }
            } else {
                responseText = `⚠️ <b>고객 정보 연동이 필요합니다.</b> 고객 연동 후 대화창에 생성되는 상품 카드의 체크박스를 선택하고 다시 요약을 요청해 주세요.`;
            }
        }
        // Match general coverage check
        else if (userText.includes("보장돼") || userText.includes("보장 분석") || userText.includes("분석해줘") || userText.includes("보장 여부")) {
            if (customer) {
                const selectedPolicies = appState.chatState[option].selectedContracts || [];
                const selectedContractsList = customer.contracts.filter(c => selectedPolicies.includes(c.policyNo));
                
                if (selectedContractsList.length === 0) {
                    responseText = `⚠️ <b>분석할 계약이 선택되지 않았습니다.</b> 대화창의 계약 카드 체크박스[✓]를 선택한 뒤 다시 질문해 주세요.`;
                } else {
                    let selectedNames = selectedContractsList.map(c => c.name.replace("(무)한화생명 ", "")).join(", ");
                    let analysisBody = "";
                    
                    if (customer.id === 1) { // 김*수 81년생
                        const silsonChecked = selectedPolicies.includes("211078990");
                        const ciChecked = selectedPolicies.includes("181107895");
                        
                        if (silsonChecked && ciChecked) {
                            analysisBody = `실손 의료비 한도 5,000만원을 통한 실제 치료비 보장과 CI 사망/진단 정액 보장이 조화롭게 구성되어 있습니다. 다만 뇌혈관 및 허혈성 심장질환 진단비가 부족하여 보완 설계가 필요합니다.`;
                        } else if (silsonChecked) {
                            analysisBody = `실손의료비 보험 단독 구성으로 입원 치료비의 실비 보장은 우수하나, 일반 사망 보장이나 암/뇌/심장 진단비 정액 자금이 전혀 없는 상황입니다.`;
                        } else {
                            analysisBody = `CI 사망 및 중대한 질병 진단비 최대 8,000만원 정액 담보는 탄탄하지만, 질병 및 재해로 통원/입원 시 실제 납부한 병원비를 보장해 주는 실손의료비 특약이 없어 보장 공백이 큽니다.`;
                        }
                    } else if (customer.id === 2) { // 이*희
                        const cancerChecked = selectedPolicies.includes("230504123");
                        const femaleChecked = selectedPolicies.includes("200812345");
                        
                        if (cancerChecked && femaleChecked) {
                            analysisBody = `암 진단비 5,000만원 및 유방암 3,000만원, 여성특정수술비 등 핵심 정액 보장 설계가 우수합니다. 그러나 실제 병원 치료비를 한도 내에서 커버하는 실손의료비 보험이 미가입 상태이므로 이에 대한 즉시 보강이 요구됩니다.`;
                        } else if (cancerChecked) {
                            analysisBody = `시그니처암보험 단독 가입으로 암 진단비는 준비되었지만, 여성 특정 질환 관련 수술비 보장과 근본적인 병원 치료비를 실손으로 돌려받는 실손의료비 보장이 누락되어 있습니다.`;
                        } else {
                            analysisBody = `여성 전용 정액 건강보험 특약은 충실하나, 일반암/소액암 진단비 한도 및 전체 병원 치료비를 보장해 줄 실손의료비 보장에 큰 구멍(Gap)이 발견됩니다.`;
                        }
                    } else if (customer.id === 4) { // 김*수 74년생
                        analysisBody = `사망 보장 1억원의 스마트통합종신보험 단독 구성입니다. 암 진단비 및 실손의료비, 그리고 뇌/심장 진단비 등 실제 실생활에서 자주 발생하는 질병 치료비와 진단비가 완전히 공백 상태이므로 즉각적인 종합 컨설팅이 요구됩니다.`;
                    } else { // 박*수
                        analysisBody = `백세건강간병보험 단독으로 실버 간병 및 치매 보장만 가입되어 있으며, 3대 질병 진단비 및 기본 실손의료비 특약은 모두 누락되어 보장 결손 상태입니다.`;
                    }
                    
                    responseText = `🔍 <b>선택하신 상품(${selectedNames}) 기준 보장 분석 결과:</b><br><br>${analysisBody}<br><br>더 상세한 보장 공백 정보는 "부족한 보장 분석" 칩을 클릭해 확인해 보시기 바랍니다.`;
                }
            } else {
                responseText = `⚠️ <b>고객 정보 연동이 필요합니다.</b>`;
            }
        }
        else if (userText.includes("가입 보험") || userText.includes("가입 내역") || userText.includes("가입된") || userText.includes("계약 정보") || userText.includes("보유 계약")) {
            if (customer) {
                let contractsText = customer.contracts.map(c => `<li><b>${c.name}</b> (증권번호: ${c.policyNo})<br>└ 계약일: ${c.date} | 보험료: ${c.price} | ${c.riders} 가입<br>└ 요약내용: ${c.summary}</li>`).join("");
                responseText = `📋 <b>${customer.name} 고객님(${customer.birth})의 가입 계약 분석입니다:</b><br><br>현재 총 <b>${customer.contracts.length}건</b>의 보험에 가입되어 있으십니다.<br><ul style="padding-left:20px; margin-top:6px;">${contractsText}</ul><br>상세 보장 한도 시뮬레이션이 필요하시면 "암에 걸리면 보험금 얼마나와?"라고 질문해 보십시오.`;
            } else {
                responseText = `⚠️ <b>고객 정보가 연동되지 않았습니다.</b><br><br>현재 일반 범용 상담 모드입니다. 특정 고객의 계약을 조회하려면 고객 정보를 연동해 주세요.<br>일반적인 FP 계약 분석 프로세스는 <span class="citation" data-ref="manual_fp_securities">FP 증권 분석 업무 매뉴얼</span>을 참조해 주시기 바랍니다.`;
            }
        } 
        else if (userText.includes("부족") || userText.includes("보장 분석") || userText.includes("Gap") || userText.includes("갭")) {
            if (customer) {
                let gapsText = customer.gaps.map(g => `<li>${g}</li>`).join("");
                responseText = `🔍 <b>${customer.name} 고객님의 보장 공백 분석 결과입니다:</b><br><br>연령대 표준 가입 모델 대비 부족한 보장 내역입니다.<br><ul style="padding-left:20px; margin-top:6px; color:#E05600; font-weight:500;">${gapsText}</ul><br>특히 뇌/심장 진단비 보장이 취약하므로 <b>건강보장 및 시그니처암보험 특약 가입</b> 등을 추천하는 것이 좋습니다. 설계 기준은 <span class="citation" data-ref="manual_fp_securities">FP 증권 분석 업무 매뉴얼 제2조</span>를 확인하세요.`;
            } else {
                responseText = `⚠️ <b>고객 정보 연동이 필요합니다.</b><br><br>보장 공백 분석은 연동된 고객의 생명보험/손해보험 가입 데이터를 실시간 매칭하여 진행됩니다. 고객 정보를 먼저 연동해 주세요.`;
            }
        }
        else if (userText.includes("납입면제") || userText.includes("면제") || userText.includes("14조")) {
            if (customer && customer.id === 1) {
                responseText = `💡 <b>김*수 고객님 가입 상품의 납입면제 조건 안내:</b><br><br>보유 중이신 <b>(무)한화생명 스마트통합종신보험</b>에는 <span class="citation" data-ref="doc_smart_life_14">약관 제14조 (보험료 납입 면제)</span> 조항이 포함되어 있습니다.<br><br><b>핵심 조건:</b> 재해 또는 질병으로 장해지급률 합산 <b>50% 이상</b> 장해상태 시 보장보험료 납입이 전액 면제됩니다.<br><br>세부 청구 및 서류 기준은 우측 분할 화면에 열린 약관 문서를 참고해 주십시오.`;
            } else {
                responseText = `📖 <b>종신보험 납입면제 약관 정보:</b><br><br>한화생명 대표 종신보험 상품의 납입면제 규정은 보통 장해지급률 <b>50% 이상</b> 장해 합산 시 해당합니다. 상세 내용은 <span class="citation" data-ref="doc_smart_life_14">종신보험 약관 제14조 납입면제</span> 조항에서 확인해 보세요.`;
            }
        }
        else if (userText.includes("서류") || userText.includes("청구") || userText.includes("실손")) {
            responseText = `📄 <b>실손의료비 및 일반 보험금 청구 서류 안내:</b><br><br>보험금 청구에는 공통적으로 <b>보험금 청구서, 신분증 사본</b>이 필요합니다. 실손 통원비의 경우 3만원 이하 소액 건은 스마트폰 간편 청구(영수증+질병코드 처방전)가 가능합니다.<br><br>상세 보장구분별 필요 서류(통원, 입원, 암진단) 리스트는 <span class="citation" data-ref="manual_claim_doc">보험금 청구 필수 서류 안내 매뉴얼</span>을 클릭하여 우측 분할창에서 확인 가능합니다.`;
        }
        else if (userText.includes("사망") || userText.includes("12조")) {
            responseText = `🦴 <b>(무)한화생명 스마트통합종신보험 사망보장 지급 기준:</b><br><br>사망보험금의 지급 기준은 피보험자가 보험기간 중 사망 시 1억원이 지급됩니다. 단, 계약일로부터 2년 이내의 자살 등의 고의적인 해는 부지급됩니다.<br><br>상세 예외 규정은 <span class="citation" data-ref="doc_smart_life_12">종신보험 약관 제12조</span>에서 볼 수 있습니다.`;
        }
        else {
            // General Conversational Fallback
            if (customer) {
                responseText = `💬 연동 고객: <b>${customer.name}(${customer.gender})</b><br><br>고객 분석을 위한 추천 검색어입니다:<br>1. "<b>가입 보험 조회</b>" - 전체 계약 조회 및 특약 정보<br>2. "<b>부족한 보장 분석</b>" - 맞춤형 보장 공백 검출<br>3. "<b>납입면제 약관 확인</b>" - 상품 약관 상세 분석`;
            } else {
                responseText = `💬 안녕하십니까! 한화생명 상담 PLUS AI입니다. 현재 특정 고객 연동이 없는 <b>일반 모드</b>입니다.<br><br>추천 질문 목록:<br>1. "<b>고객 증권 분석 프로세스 매뉴얼</b>"<br>2. "<b>보험금 청구 필수 서류 안내</b>"<br>3. "<b>종신보험 사망보장 약관 예시</b>"`;
            }
        }
        
        // Render citation markup appropriately (replace custom markup with active class if any)
        responseText = responseText.replace(/\[([^\]]+)\]\(citation:([^\)]+)\)/g, '<span class="citation" data-ref="$2">$1</span>');
        
        appState.chatState[option].messages.push({
            id: 'ai_' + Date.now(),
            sender: 'ai',
            time: timeStr,
            text: responseText
        });
        
        renderChat();
        renderSuggestions();
    }, 800);
}

// B안: Sidebar search results rendering
function renderSidebarSearchResults(query) {
    const resultsContainer = document.getElementById('sidebarSearchResults');
    resultsContainer.innerHTML = '';
    
    if (!query.trim()) {
        resultsContainer.style.display = 'none';
        return;
    }
    
    // Filter customerDb
    const filtered = customerDb.filter(cust => 
        cust.name.includes(query) || 
        cust.birth.includes(query) ||
        (query.length >= 2 && '김철수'.includes(query) && cust.id === 1) ||
        (query.length >= 2 && '이영희'.includes(query) && cust.id === 2) ||
        (query.length >= 2 && '박민수'.includes(query) && cust.id === 3)
    );
    
    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<div style="font-size:11px; color:#94A3B8; padding:8px; text-align:center;">검색 결과가 없습니다.</div>';
        resultsContainer.style.display = 'block';
        return;
    }
    
    filtered.forEach(cust => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <div class="search-result-avatar ${cust.genderCode}">
                ${cust.name.substring(0, 1)}
            </div>
            <div class="search-result-info">
                <span>${cust.name}</span> (${cust.birth} · ${cust.gender})<br>
                계약 ${cust.contracts.length}건
            </div>
        `;
        item.addEventListener('click', () => {
            selectCustomer(cust.id);
            document.getElementById('sidebarSearchInput').value = '';
            document.getElementById('btnSidebarSearchClear').style.display = 'none';
            resultsContainer.style.display = 'none';
        });
        resultsContainer.appendChild(item);
    });
    
    resultsContainer.style.display = 'block';
}

// Option C: Chat input typing triggers autocomplete or natural language check
let optionCPendingCustomer = null;

function handleChatInputType(e) {
    if (appState.activeTab !== 'C') return;
    
    const input = e.target;
    const value = input.value;
    
    // If text ends with @ or has @ at the end
    const lastWord = value.split(/\s+/).pop();
    if (lastWord && lastWord.startsWith('@')) {
        const query = lastWord.substring(1);
        showAutocomplete(query);
    } else {
        hideAutocomplete();
    }
}

function handleChatInputKeyup(e) {
    if (appState.activeTab !== 'C') return;
    
    const input = e.target;
    const value = input.value;
    
    // Detect customer names in natural language
    const namePattern = /(김\*수|이\*희|박\*수|김철수|이영희|박민수)/g;
    const match = namePattern.exec(value);
    
    if (match) {
        const name = match[1];
        let cust = null;
        if (name === '김*수' || name === '김철수') {
            cust = customerDb.find(c => c.id === 1);
        } else if (name === '이*희' || name === '이영희') {
            cust = customerDb.find(c => c.id === 2);
        } else if (name === '박*수' || name === '박민수') {
            cust = customerDb.find(c => c.id === 3);
        }
        
        if (cust && appState.chatState.C.selectedCustomer?.id !== cust.id) {
            showSmartBadge(cust);
        }
    } else {
        if (!value.trim()) {
            hideSmartBadge();
        }
    }
}

function showAutocomplete(query) {
    const popup = document.getElementById('autocompletePopup');
    popup.innerHTML = '';
    
    const filtered = customerDb.filter(cust => 
        cust.name.includes(query) || 
        cust.birth.includes(query)
    );
    
    if (filtered.length === 0) {
        popup.innerHTML = '<div style="font-size:12px; color:var(--text-muted); padding:10px; text-align:center;">검색 결과 없음</div>';
        popup.classList.add('open');
        return;
    }
    
    filtered.forEach(cust => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.innerHTML = `
            <div class="autocomplete-avatar ${cust.genderCode}">
                ${cust.name.substring(0, 1)}
            </div>
            <div class="autocomplete-meta">
                <span class="autocomplete-name">${cust.name} (${cust.birth})</span>
                <span class="autocomplete-desc">계약 ${cust.contracts.length}건</span>
            </div>
        `;
        item.addEventListener('click', () => {
            selectCustomer(cust.id);
            const textarea = document.getElementById('chatInput');
            const words = textarea.value.split(/\s+/);
            words.pop(); // Remove the @ word
            textarea.value = words.join(' ') + (words.length ? ' ' : '');
            textarea.focus();
            hideAutocomplete();
        });
        popup.appendChild(item);
    });
    
    popup.classList.add('open');
}

function hideAutocomplete() {
    const popup = document.getElementById('autocompletePopup');
    if (popup) popup.classList.remove('open');
}

function showSmartBadge(customer) {
    optionCPendingCustomer = customer;
    const badge = document.getElementById('smartFloatingBadge');
    const badgeText = document.getElementById('smartBadgeText');
    if (badge && badgeText) {
        badgeText.innerHTML = `🔍 <b>${customer.name}(${customer.birth})</b> 고객 정보와 연동할까요?`;
        badge.classList.add('open');
    }
}

function hideSmartBadge() {
    optionCPendingCustomer = null;
    const badge = document.getElementById('smartFloatingBadge');
    if (badge) badge.classList.remove('open');
}

function acceptSmartBadge() {
    if (optionCPendingCustomer) {
        selectCustomer(optionCPendingCustomer.id);
        hideSmartBadge();
        const input = document.getElementById('chatInput');
        input.focus();
    }
}

// Global scope homonym selection triggers for D안
window.selectHomonymCustomer = function(id) {
    selectCustomer(id);
};

// Right Document Drawer (3-Split view) controls
function openDocPanel(refId) {
    const doc = documentDb[refId];
    if (!doc) return;
    
    // Render doc details
    let sectionsHtml = doc.sections.map(sec => `
        <div class="doc-section">
            <div class="doc-section-title">${sec.title}</div>
            <div class="doc-section-content">${sec.content}</div>
        </div>
    `).join("");
    
    docPanelBody.innerHTML = `
        <div class="insurance-doc">
            <div class="doc-title">${doc.title}</div>
            <div class="doc-meta">${doc.meta}</div>
            ${sectionsHtml}
            <div class="highlight-box">
                ${doc.highlight}
            </div>
        </div>
    `;
    
    docPanel.classList.add('open');
}

function closeDocPanel() {
    docPanel.classList.remove('open');
}

// Feedback System Logic
function toggleFeedbackPanel() {
    feedbackPanel.classList.toggle('open');
}

function switchFeedbackView(view) {
    if (view === 'form') {
        feedbackFormTab.classList.add('active');
        feedbackStatsTab.classList.remove('active');
        feedbackFormView.style.display = 'block';
        feedbackStatsView.style.display = 'none';
    } else {
        feedbackFormTab.classList.remove('active');
        feedbackStatsTab.classList.add('active');
        feedbackFormView.style.display = 'none';
        feedbackStatsView.style.display = 'block';
        renderStats();
    }
}

// Handles dynamic rating stars clicking
function setFeedbackStars(val) {
    appState.feedback.stars = val;
    const stars = ratingStars.querySelectorAll('.star');
    stars.forEach(star => {
        const starVal = parseInt(star.dataset.value);
        star.classList.toggle('active', starVal <= val);
    });
}

// Submits the FP feedback to LocalStorage
function handleFeedbackSubmit(e) {
    e.preventDefault();
    
    const pref = appState.feedback.preferredOption;
    const stars = appState.feedback.stars;
    const comment = document.getElementById('feedbackComment').value.trim();
    
    if (!pref) {
        alert("선호하시는 화면 시안(A, B, C, D안)을 선택해 주세요!");
        return;
    }
    if (stars === 0) {
        alert("디자인 평가 별점을 부여해 주세요!");
        return;
    }
    
    const newFeedback = {
        id: 'feed_' + Date.now(),
        date: new Date().toLocaleDateString('ko-KR'),
        preferred: pref,
        rating: stars,
        comment: comment || "의견 없음"
    };
    
    // Retrieve existing and save
    let list = JSON.parse(localStorage.getItem('ab_test_feedbacks') || '[]');
    list.unshift(newFeedback); // insert at start
    localStorage.setItem('ab_test_feedbacks', JSON.stringify(list));
    
    alert("현장 의견을 성공적으로 접수했습니다. 참여해 주셔서 감사합니다!");
    
    // Reset Form
    appState.feedback = { preferredOption: null, stars: 0, comment: "" };
    document.querySelectorAll('.pref-card').forEach(c => c.classList.remove('selected'));
    setFeedbackStars(0);
    document.getElementById('feedbackComment').value = '';
    
    // Switch to Stats Dashboard
    switchFeedbackView('stats');
}

// Renders the stats view from localStorage
function renderStats() {
    const list = JSON.parse(localStorage.getItem('ab_test_feedbacks') || '[]');
    
    const voteABar = document.getElementById('voteABar');
    const voteBBar = document.getElementById('voteBBar');
    const voteCBar = document.getElementById('voteCBar');
    const voteDBar = document.getElementById('voteDBar');
    
    const countValA = document.getElementById('countValA');
    const countValB = document.getElementById('countValB');
    const countValC = document.getElementById('countValC');
    const countValD = document.getElementById('countValD');
    
    const averageRatingVal = document.getElementById('averageRatingVal');
    const totalCountVal = document.getElementById('totalCountVal');
    const recentReviews = document.getElementById('recentReviews');
    
    // Default initial mock stats if empty, to make the prototype look alive
    const defaultStats = [
        { id: 'f1', date: '2026-06-18', preferred: 'A', rating: 5, comment: "아이콘 방식이 대화 입력창을 가리지 않고 프로필 확인이 직관적이어서 깔끔합니다." },
        { id: 'f2', date: '2026-06-18', preferred: 'B', rating: 4, comment: "사이드바에 고객 검색 폼이 있으니 모달을 띄우지 않고 바로 찾을 수 있어 업무 속도가 빠릅니다." },
        { id: 'f3', date: '2026-06-19', preferred: 'C', rating: 5, comment: "@만 쳐도 단골 고객 목록이 나오는 자동완성 방식이 아주 혁신적이고 키보드 동선이 깔끔하네요." },
        { id: 'f4', date: '2026-06-19', preferred: 'D', rating: 5, comment: "입력창 바로 옆에 큼직하게 [고객 선택] 버튼이 있고 터치 추천 칩이 커서 어르신 FP분들이 가장 좋아할 것 같습니다." }
    ];
    
    let combinedList = [...list];
    if (combinedList.length === 0) {
        combinedList = defaultStats;
    }
    
    const total = combinedList.length;
    const votesA = combinedList.filter(f => f.preferred === 'A').length;
    const votesB = combinedList.filter(f => f.preferred === 'B').length;
    const votesC = combinedList.filter(f => f.preferred === 'C').length;
    const votesD = combinedList.filter(f => f.preferred === 'D').length;
    
    const pctA = total > 0 ? Math.round((votesA / total) * 100) : 25;
    const pctB = total > 0 ? Math.round((votesB / total) * 100) : 25;
    const pctC = total > 0 ? Math.round((votesC / total) * 100) : 25;
    const pctD = total > 0 ? Math.round((votesD / total) * 100) : 25;
    
    voteABar.style.width = `${pctA}%`;
    voteABar.innerText = votesA > 0 ? `A안 (${pctA}%)` : '';
    
    voteBBar.style.width = `${pctB}%`;
    voteBBar.innerText = votesB > 0 ? `B안 (${pctB}%)` : '';
    
    voteCBar.style.width = `${pctC}%`;
    voteCBar.innerText = votesC > 0 ? `C안 (${pctC}%)` : '';
    
    voteDBar.style.width = `${pctD}%`;
    voteDBar.innerText = votesD > 0 ? `D안 (${pctD}%)` : '';
    
    countValA.innerText = `${votesA}표`;
    countValB.innerText = `${votesB}표`;
    countValC.innerText = `${votesC}표`;
    countValD.innerText = `${votesD}표`;
    totalCountVal.innerText = `${total}건`;
    
    const avgRating = total > 0 
        ? (combinedList.reduce((acc, curr) => acc + curr.rating, 0) / total).toFixed(1)
        : '0.0';
    averageRatingVal.innerText = `${avgRating} / 5.0`;
    
    // Render list
    recentReviews.innerHTML = '';
    combinedList.slice(0, 10).forEach(f => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-meta">
                <span class="review-pref">${f.preferred}안 선호</span>
                <span class="review-rating">${'★'.repeat(f.rating)}${'☆'.repeat(5 - f.rating)}</span>
            </div>
            <div class="review-comment">${f.comment}</div>
        `;
        recentReviews.appendChild(item);
    });
}

// Exports feedback database as a CSV download
function exportFeedbackCsv() {
    const list = JSON.parse(localStorage.getItem('ab_test_feedbacks') || '[]');
    if (list.length === 0) {
        alert("다운로드할 피드백 데이터가 없습니다. 먼저 의견을 등록해 주세요.");
        return;
    }
    
    let csvContent = "\uFEFF"; // UTF-8 BOM
    csvContent += "ID,날짜,선호시안,평점,한줄의견\n";
    
    list.forEach(f => {
        const escapedComment = f.comment.replace(/"/g, '""');
        csvContent += `"${f.id}","${f.date}","${f.preferred}","${f.rating}","${escapedComment}"\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `AB_Test_Feedback_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// B안: 대화창 내 고객 리스트 출력 함수
function showChatCustomerList() {
    const listHtml = customerDb.map(c => `
        <div class="chat-customer-select-card" onclick="selectCustomerFromChat(${c.id})">
            <div class="customer-avatar ${c.genderCode}" style="width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white; font-size: 12px; background-color: ${c.genderCode === 'male' ? '#3B82F6' : '#EC4899'};">
                ${c.name.substring(0, 1)}
            </div>
            <div style="flex: 1; text-align: left;">
                <div style="font-weight: 700; font-size: 13px; color: var(--text-dark);">${c.name} (${c.birth} · ${c.gender})</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">계약 ${c.contracts.length}건</div>
            </div>
            <div style="font-size: 10px; background-color: var(--primary-light); color: var(--primary); padding: 4px 8px; border-radius: 4px; font-weight: 600;">연동 👤</div>
        </div>
    `).join("");

    appState.chatState.B.messages = [
        initialWelcomeMessage('B'),
        {
            id: 'chat_cust_list',
            sender: 'ai',
            time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
            text: `👥 <b>상담을 진행할 고객을 선택해 주세요:</b><br>${listHtml}`
        }
    ];
    renderChat();
}

// B안: 대화창 내 고객 리스트에서 선택 시 처리 함수
window.selectCustomerFromChat = function(id) {
    if (appState.activeTab !== 'B') return;
    
    // 고객 연동 시 대화창 내부의 고객 목록 메시지 제거
    appState.chatState.B.messages = appState.chatState.B.messages.filter(m => m.id !== 'chat_cust_list');
    
    // 고객 정보 연동 실행 (내부에서 renderChat() 호출)
    selectCustomer(id);
    
    // 상단 체크박스 상태 유지
    document.getElementById('optBCheckbox').checked = true;
};

