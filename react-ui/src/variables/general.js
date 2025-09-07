// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
  FaUser,
  FaUserGraduate,
  FaDollarSign,
  FaBook,
  FaSchool,
  FaUniversity,
  FaGraduationCap,
  FaUserFriends,
  FaFileAlt,
  FaPencilAlt
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const universityData = [
  {
    name: "Yale University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "02.01.2024",
    country: "USA",
    chance: 40,
  },
  {
    name: "Massachusetts Institute of Technology",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/MIT_Seal.svg/1200px-MIT_Seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 20,
  },
  {
    name: "California Institute of Technology (Caltech)",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 30,
  },
  {
    name: "Princeton University",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 50,
  },
  {
    name: "University of Chicago",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 20,
  },
  {
    name: "Columbia University",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 30,

  },
  {
    name: "University of California",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 70,
  },
  {
    name: "University of Michigan",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 40,
  },
  {
    name: "Duke University",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Yale_University_seal.svg/1200px-Yale_University_seal.svg.png",
    location: "01.01.2024",
    country: "USA",
    chance: 50,
  },
];



export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaGraduationCap,
    title: "Research and Prepare",
    date: "23 MAR 11:21 PM",
    color: "green.400",
    text: "Research and Prepare: Research Yale University and their Bachelor's degree program to determine if it is the right fit for your academic and personal goals. Review the admission requirements, application deadlines, and necessary materials needed for the application process."
  },
  {
    logo: FaBook,
    title: "Academic Preparation",
    date: "12 APR 9:28 PM",
    color: "green.400",
    text: "Ensure that you are academically prepared for the rigorous coursework at Yale University. Take challenging courses in high school and strive to maintain a high GPA. Consider taking advanced courses in areas such as mathematics, science, and humanities to demonstrate your academic potential."
  },
  {
    logo: FaPencilAlt,
    title: "Standardized Tests",
    date: "20 APR 3:52 PM",
    color: "green.400",
    text: "Take standardized tests such as the SAT or ACT, and SAT Subject Tests to demonstrate your academic abilities. Score well on these tests to increase your chances of admission."
  },
  {
    logo: FaUserFriends,
    title: "Extracurricular Activities",
    date: "22 APR 2:12 PM",
    color: "black",
    text: "Participate in extracurricular activities that interest you and demonstrate your leadership potential, such as student government, community service, sports teams, or clubs. These activities can showcase your personal qualities and commitment to leadership and service."
  },
  {
    logo: FaFileAlt,
    title: "Essays and Recommendations",
    date: "15 MAY 8:12 PM",
    color: "black",
    text: "Write strong essays that showcase your personality, academic interests, and extracurricular experiences. Choose recommenders who know you well and can provide detailed insight into your academic and personal qualities. "
  },
  {
    logo: FaFileAlt,
    title: "Submit Application",
    date: "17 MAY 11:21 PM",
    color: "black",
    text: "Submit a complete and well-prepared application by the deadline. Ensure that all required materials, including transcripts, test scores, essays, and recommendations, are submitted on time."
  },
  {
    logo: FaUser,
    title: "Interview",
    date: "03 AUG 11:21 PM",
    color: "black",
    text: "If selected, participate in an interview with a member of the Yale admissions committee. This is an opportunity to showcase your personality and demonstrate why you would be a strong fit for Yale University."
  },
  {
    logo: FaUniversity,
    title: "Wait for Decision",
    date: "12 DEC 11:21 PM",
    color: "black",
    text: "Wait for the admission decision from Yale University. If accepted, congratulations! If not, don't be discouraged, and consider other excellent universities that may also be a good fit for you."
  },
];

export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Purity UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Purity UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
