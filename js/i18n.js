const i18n = {
    currentLang: localStorage.getItem('lang') || 'zh',
    
    translations: {
        zh: {
            nav: {
                overview: '概览',
                dataManagement: '数据管理',
                reportTrading: '报告交易',
                systemManagement: '系统管理',
                dashboard: '数据概览',
                dataEntry: '数据录入',
                monitoring: '实时监测',
                analysis: '数据分析',
                reports: '报告中心',
                trading: '碳交易',
                solutions: '减排方案',
                company: '企业管理',
                profile: '个人中心'
            },
            header: {
                prototypeOverview: '原型页面总览',
                fullScreen: '全屏预览',
                exportReport: '导出报告',
                enterData: '录入数据',
                realTimeUpdate: '实时更新'
            },
            common: {
                systemName: '碳排放管理',
                pcPrototype: 'PC端原型',
                today: '今日',
                thisMonth: '本月',
                yearly: '年度',
                cumulative: '累计',
                tonsCO2: '吨CO₂',
                targetCompletion: '目标完成率',
                remaining: '剩余',
                co2Reduction: '吨CO₂减排',
                excellent: '优秀',
                viewAll: '查看全部',
                more: '更多',
                inProgress: '进行中',
                completed: '已完成',
                processNow: '立即处理',
                viewDetails: '查看详情',
                last7Days: '近7天',
                last30Days: '近30天',
                last3Months: '近3个月',
                last1Year: '近1年'
            },
            dashboard: {
                carbonTrend: '碳排放趋势',
                emissionSourceDistribution: '排放源分布',
                totalEmission: '总排放',
                productionWorkshop: '生产车间',
                transportation: '交通运输',
                officeElectricity: '办公用电',
                others: '其他',
                pendingTasks: '待办事项',
                items: '项',
                monthlyReportDue: '月度报告待提交',
                deadline: '截止日期',
                dataReviewPending: '数据审核待处理',
                dataPendingReview: '条数据待审核',
                equipmentInspection: '设备巡检提醒',
                inspectionDate: '巡检日期',
                reductionUpdates: '减排动态',
                solarProject: '光伏发电项目启动',
                estimatedAnnualReduction: '预计年减排量',
                equipmentUpgrade: '节能设备改造完成',
                equipmentUpgraded: '已完成80%设备升级',
                comparedYesterday: '较昨日',
                comparedLastMonth: '较上月',
                progress: '进度'
            },
            index: {
                dashboardDesc: 'Dashboard - 碳排放数据可视化仪表盘',
                dataEntryDesc: 'Data Entry - 碳排放数据记录与导入',
                monitoringDesc: 'Monitoring - 碳排放实时监控面板',
                analysisDesc: 'Analysis - 多维度碳排放趋势分析',
                reportsDesc: 'Reports - 自动化碳排放报告工具',
                tradingDesc: 'Trading - 碳配额管理和交易平台',
                solutionsDesc: 'Solutions - 减排措施与优化建议',
                companyDesc: 'Company - 企业信息与组织管理',
                dataVisualization: '数据可视化',
                realTimeStats: '实时统计',
                dataEntryTag: '数据录入',
                batchImport: '批量导入',
                realTimeMonitor: '实时监控',
                alertSystem: '预警系统',
                trendAnalysis: '趋势分析',
                dataComparison: '数据对比',
                autoGenerate: '自动生成',
                exportFunction: '导出功能',
                quotaManagement: '配额管理',
                tradingRecords: '交易记录',
                reductionMeasures: '减排措施',
                optimizationSuggestions: '优化建议',
                enterpriseInfo: '企业信息',
                orgStructure: '组织架构',
                designNotes: '设计说明',
                pcOptimized: 'PC端优化',
                pcOptimizedDesc: '针对大屏幕优化的布局设计，充分利用屏幕空间展示更多数据',
                sideNavigation: '侧边导航',
                sideNavigationDesc: '采用固定侧边栏导航，方便快速切换功能模块',
                dataVisualizationTitle: '数据可视化',
                dataVisualizationDesc: '丰富的图表展示，直观呈现碳排放数据'
            },
            pages: {
                dataEntry: {
                    title: '数据录入',
                    basicInfo: '基本信息',
                    emissionSource: '排放源',
                    emissionSourcePlaceholder: '请选择排放源',
                    productionWorkshop: '生产车间',
                    transportationDept: '交通运输部门',
                    officeArea: '办公区域',
                    other: '其他区域',
                    emissionType: '排放类型',
                    emissionTypePlaceholder: '请选择排放类型',
                    directEmission: '直接排放',
                    indirectEmission: '间接排放',
                    dataDate: '数据日期',
                    emissionAmount: '排放量',
                    emissionAmountPlaceholder: '请输入排放量',
                    unit: '单位',
                    unitPlaceholder: '请选择单位',
                    dataCollector: '数据采集人',
                    dataCollectorPlaceholder: '请输入采集人姓名',
                    remark: '备注',
                    remarkPlaceholder: '请输入备注信息（选填）',
                    submit: '提交数据',
                    reset: '重置',
                    recentRecords: '最近录入记录',
                    viewHistory: '查看历史记录',
                    batchImport: '批量导入',
                    downloadTemplate: '下载模板',
                    selectFile: '选择文件',
                    import: '导入',
                    cancel: '取消'
                },
                monitoring: {
                    title: '实时监测',
                    realTimeData: '实时数据',
                    warningInfo: '预警信息',
                    normal: '正常',
                    warning: '预警',
                    danger: '危险',
                    currentEmission: '当前排放量',
                    dailyLimit: '日限额',
                    monthlyLimit: '月限额',
                    warningThreshold: '预警阈值',
                    warningHistory: '预警历史',
                    noWarning: '暂无预警信息'
                },
                analysis: {
                    title: '数据分析',
                    trendAnalysis: '趋势分析',
                    comparisonAnalysis: '对比分析',
                    structureAnalysis: '结构分析',
                    yearOnYear: '同比',
                    monthOnMonth: '环比',
                    selectTimeRange: '选择时间范围',
                    selectDepartment: '选择部门',
                    generateReport: '生成报告'
                },
                reports: {
                    title: '报告中心',
                    monthlyReport: '月度报告',
                    quarterlyReport: '季度报告',
                    annualReport: '年度报告',
                    customReport: '自定义报告',
                    generateReport: '生成报告',
                    download: '下载',
                    preview: '预览',
                    reportHistory: '报告历史',
                    noReports: '暂无报告'
                },
                trading: {
                    title: '碳交易管理',
                    myQuota: '我的配额',
                    usedQuota: '已使用配额',
                    remainingQuota: '剩余配额',
                    tradingMarket: '交易市场',
                    buyQuota: '购买配额',
                    sellQuota: '出售配额',
                    tradingHistory: '交易记录',
                    price: '价格',
                    quantity: '数量',
                    amount: '金额',
                    time: '时间',
                    status: '状态'
                },
                solutions: {
                    title: '减排方案',
                    recommendedSolutions: '推荐方案',
                    mySolutions: '我的方案',
                    addSolution: '添加方案',
                    solutionName: '方案名称',
                    expectedReduction: '预计减排量',
                    investment: '投入成本',
                    paybackPeriod: '回收周期',
                    implementation: '实施进度'
                },
                company: {
                    title: '企业管理',
                    companyInfo: '企业信息',
                    orgStructure: '组织架构',
                    departmentManagement: '部门管理',
                    employeeManagement: '员工管理',
                    companyName: '企业名称',
                    industry: '所属行业',
                    address: '企业地址',
                    contact: '联系方式',
                    edit: '编辑',
                    save: '保存'
                },
                profile: {
                    title: '个人中心',
                    basicInfo: '基本信息',
                    accountSecurity: '账号安全',
                    notificationSettings: '通知设置',
                    editProfile: '编辑资料',
                    changePassword: '修改密码',
                    logout: '退出登录',
                    username: '用户名',
                    email: '邮箱',
                    phone: '手机号',
                    department: '所属部门',
                    role: '角色'
                }
            }
        },
        en: {
            nav: {
                overview: 'Overview',
                dataManagement: 'Data Management',
                reportTrading: 'Reports & Trading',
                systemManagement: 'System',
                dashboard: 'Dashboard',
                dataEntry: 'Data Entry',
                monitoring: 'Monitoring',
                analysis: 'Analysis',
                reports: 'Reports',
                trading: 'Trading',
                solutions: 'Solutions',
                company: 'Company',
                profile: 'Profile'
            },
            header: {
                prototypeOverview: 'Prototype Overview',
                fullScreen: 'Full Screen',
                exportReport: 'Export Report',
                enterData: 'Enter Data',
                realTimeUpdate: 'Real-time'
            },
            common: {
                systemName: 'Carbon Management',
                pcPrototype: 'PC Prototype',
                today: 'Today',
                thisMonth: 'This Month',
                yearly: 'Yearly',
                cumulative: 'Cumulative',
                tonsCO2: 'tons CO₂',
                targetCompletion: 'Target Completion',
                remaining: 'Remaining',
                co2Reduction: 'tons CO₂ Reduced',
                excellent: 'Excellent',
                viewAll: 'View All',
                more: 'More',
                inProgress: 'In Progress',
                completed: 'Completed',
                processNow: 'Process Now',
                viewDetails: 'View Details',
                last7Days: 'Last 7 Days',
                last30Days: 'Last 30 Days',
                last3Months: 'Last 3 Months',
                last1Year: 'Last 1 Year'
            },
            dashboard: {
                carbonTrend: 'Carbon Emission Trend',
                emissionSourceDistribution: 'Emission Source Distribution',
                totalEmission: 'Total Emission',
                productionWorkshop: 'Production Workshop',
                transportation: 'Transportation',
                officeElectricity: 'Office Electricity',
                others: 'Others',
                pendingTasks: 'Pending Tasks',
                items: 'items',
                monthlyReportDue: 'Monthly Report Due',
                deadline: 'Deadline',
                dataReviewPending: 'Data Review Pending',
                dataPendingReview: 'records pending review',
                equipmentInspection: 'Equipment Inspection Reminder',
                inspectionDate: 'Inspection Date',
                reductionUpdates: 'Reduction Updates',
                solarProject: 'Solar Power Project Started',
                estimatedAnnualReduction: 'Estimated Annual Reduction',
                equipmentUpgrade: 'Energy Equipment Upgrade Completed',
                equipmentUpgraded: '80% equipment upgraded',
                comparedYesterday: 'vs yesterday',
                comparedLastMonth: 'vs last month',
                progress: 'Progress'
            },
            index: {
                dashboardDesc: 'Dashboard - Carbon emission data visualization',
                dataEntryDesc: 'Data Entry - Carbon emission data recording and import',
                monitoringDesc: 'Monitoring - Real-time carbon emission monitoring panel',
                analysisDesc: 'Analysis - Multi-dimensional carbon emission trend analysis',
                reportsDesc: 'Reports - Automated carbon emission reporting tool',
                tradingDesc: 'Trading - Carbon quota management and trading platform',
                solutionsDesc: 'Solutions - Emission reduction measures and optimization suggestions',
                companyDesc: 'Company - Enterprise information and organization management',
                dataVisualization: 'Data Visualization',
                realTimeStats: 'Real-time Stats',
                dataEntryTag: 'Data Entry',
                batchImport: 'Batch Import',
                realTimeMonitor: 'Real-time Monitor',
                alertSystem: 'Alert System',
                trendAnalysis: 'Trend Analysis',
                dataComparison: 'Data Comparison',
                autoGenerate: 'Auto Generate',
                exportFunction: 'Export',
                quotaManagement: 'Quota Management',
                tradingRecords: 'Trading Records',
                reductionMeasures: 'Reduction Measures',
                optimizationSuggestions: 'Optimization',
                enterpriseInfo: 'Enterprise Info',
                orgStructure: 'Org Structure',
                designNotes: 'Design Notes',
                pcOptimized: 'PC Optimized',
                pcOptimizedDesc: 'Layout optimized for large screens, fully utilizing screen space to display more data',
                sideNavigation: 'Side Navigation',
                sideNavigationDesc: 'Fixed sidebar navigation for quick module switching',
                dataVisualizationTitle: 'Data Visualization',
                dataVisualizationDesc: 'Rich chart displays for intuitive carbon emission data presentation'
            },
            pages: {
                dataEntry: {
                    title: 'Data Entry',
                    basicInfo: 'Basic Information',
                    emissionSource: 'Emission Source',
                    emissionSourcePlaceholder: 'Select emission source',
                    productionWorkshop: 'Production Workshop',
                    transportationDept: 'Transportation Dept',
                    officeArea: 'Office Area',
                    other: 'Other Area',
                    emissionType: 'Emission Type',
                    emissionTypePlaceholder: 'Select emission type',
                    directEmission: 'Direct Emission',
                    indirectEmission: 'Indirect Emission',
                    dataDate: 'Data Date',
                    emissionAmount: 'Emission Amount',
                    emissionAmountPlaceholder: 'Enter emission amount',
                    unit: 'Unit',
                    unitPlaceholder: 'Select unit',
                    dataCollector: 'Data Collector',
                    dataCollectorPlaceholder: 'Enter collector name',
                    remark: 'Remark',
                    remarkPlaceholder: 'Enter remarks (optional)',
                    submit: 'Submit Data',
                    reset: 'Reset',
                    recentRecords: 'Recent Records',
                    viewHistory: 'View History',
                    batchImport: 'Batch Import',
                    downloadTemplate: 'Download Template',
                    selectFile: 'Select File',
                    import: 'Import',
                    cancel: 'Cancel'
                },
                monitoring: {
                    title: 'Real-time Monitoring',
                    realTimeData: 'Real-time Data',
                    warningInfo: 'Warning Information',
                    normal: 'Normal',
                    warning: 'Warning',
                    danger: 'Danger',
                    currentEmission: 'Current Emission',
                    dailyLimit: 'Daily Limit',
                    monthlyLimit: 'Monthly Limit',
                    warningThreshold: 'Warning Threshold',
                    warningHistory: 'Warning History',
                    noWarning: 'No warning information'
                },
                analysis: {
                    title: 'Data Analysis',
                    trendAnalysis: 'Trend Analysis',
                    comparisonAnalysis: 'Comparison Analysis',
                    structureAnalysis: 'Structure Analysis',
                    yearOnYear: 'Year-on-Year',
                    monthOnMonth: 'Month-on-Month',
                    selectTimeRange: 'Select Time Range',
                    selectDepartment: 'Select Department',
                    generateReport: 'Generate Report'
                },
                reports: {
                    title: 'Report Center',
                    monthlyReport: 'Monthly Report',
                    quarterlyReport: 'Quarterly Report',
                    annualReport: 'Annual Report',
                    customReport: 'Custom Report',
                    generateReport: 'Generate Report',
                    download: 'Download',
                    preview: 'Preview',
                    reportHistory: 'Report History',
                    noReports: 'No reports available'
                },
                trading: {
                    title: 'Carbon Trading',
                    myQuota: 'My Quota',
                    usedQuota: 'Used Quota',
                    remainingQuota: 'Remaining Quota',
                    tradingMarket: 'Trading Market',
                    buyQuota: 'Buy Quota',
                    sellQuota: 'Sell Quota',
                    tradingHistory: 'Trading History',
                    price: 'Price',
                    quantity: 'Quantity',
                    amount: 'Amount',
                    time: 'Time',
                    status: 'Status'
                },
                solutions: {
                    title: 'Emission Reduction Solutions',
                    recommendedSolutions: 'Recommended Solutions',
                    mySolutions: 'My Solutions',
                    addSolution: 'Add Solution',
                    solutionName: 'Solution Name',
                    expectedReduction: 'Expected Reduction',
                    investment: 'Investment Cost',
                    paybackPeriod: 'Payback Period',
                    implementation: 'Implementation Progress'
                },
                company: {
                    title: 'Company Management',
                    companyInfo: 'Company Information',
                    orgStructure: 'Organization Structure',
                    departmentManagement: 'Department Management',
                    employeeManagement: 'Employee Management',
                    companyName: 'Company Name',
                    industry: 'Industry',
                    address: 'Address',
                    contact: 'Contact',
                    edit: 'Edit',
                    save: 'Save'
                },
                profile: {
                    title: 'Profile',
                    basicInfo: 'Basic Information',
                    accountSecurity: 'Account Security',
                    notificationSettings: 'Notification Settings',
                    editProfile: 'Edit Profile',
                    changePassword: 'Change Password',
                    logout: 'Logout',
                    username: 'Username',
                    email: 'Email',
                    phone: 'Phone',
                    department: 'Department',
                    role: 'Role'
                }
            }
        }
    },
    
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key;
            }
        }
        return value;
    },
    
    setLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.updatePage();
    },
    
    getLang() {
        return this.currentLang;
    },
    
    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });
        
        const html = document.documentElement;
        html.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        this.updateLangButton();
    },
    
    updateLangButton() {
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            const langText = langBtn.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLang === 'zh' ? 'EN' : '中文';
            }
        }
    },
    
    toggleLang() {
        const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
        this.setLang(newLang);
    },
    
    init() {
        this.updatePage();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
