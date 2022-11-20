import { FreeBoardPost } from "./domain/freeboard";
import { GuestPost } from "./domain/guest";
import { QuestionAnswerPost } from "./domain/question-answer";

export const guestPostSampleData: GuestPost[] = [
  { id: 1, title: "3:3 게스트 모집합니다.", region: "성남", match_date: "22/11/17", start_time: "10:00", end_time: "12:00", status: true, content: "content sample", writer: "마한범" },
  { id: 2, title: "5:5 게스트 모집합니다.", region: "서울", match_date: "22/11/18", start_time: "18:00", end_time: "20:00", status: false, content: "content sample", writer: "하용운" },
  { id: 3, title: "4:4 게스트 모집합니다.", region: "경남", match_date: "22/11/19", start_time: "17:00", end_time: "19:00", status: true, content: "content sample", writer: "김승부" },
  { id: 4, title: "3:3 게스트 모집합니다.", region: "부산", match_date: "22/11/20", start_time: "08:00", end_time: "10:00", status: false, content: "content sample", writer: "이건호" },
  { id: 5, title: "3:3 게스트 모집합니다.", region: "충북", match_date: "22/11/21", start_time: "18:00", end_time: "20:00", status: true, content: "content sample", writer: "정회균" },
  { id: 6, title: "3:3 게스트 모집합니다.", region: "성남", match_date: "22/11/17", start_time: "10:00", end_time: "12:00", status: true, content: "content sample", writer: "마한범" },
  { id: 7, title: "5:5 게스트 모집합니다.", region: "서울", match_date: "22/11/18", start_time: "18:00", end_time: "20:00", status: false, content: "content sample", writer: "하용운" },
  { id: 8, title: "4:4 게스트 모집합니다.", region: "경남", match_date: "22/11/19", start_time: "17:00", end_time: "19:00", status: true, content: "content sample", writer: "김승부" },
  { id: 9, title: "3:3 게스트 모집합니다.", region: "부산", match_date: "22/11/20", start_time: "08:00", end_time: "10:00", status: false, content: "content sample", writer: "이건호" },
  { id: 10, title: "3:3 게스트 모집합니다.", region: "충북", match_date: "22/11/21", start_time: "18:00", end_time: "20:00", status: true, content: "content sample", writer: "정회균" } 
];

export const freeBoardPostSampleData: FreeBoardPost[] = [
  { id: 1, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 2, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "하용운"},
  { id: 3, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 4, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "하용운"},
  { id: 5, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "김승부"},
  { id: 6, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "이건호"},
  { id: 7, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "하용운"},
  { id: 8, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 9, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 10, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "하용운"},
  { id: 11, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "하용운"},
  { id: 12, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "하용운"},
  { id: 13, title: "자유게시판 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
];

export const questionAnswerPostSampleData: QuestionAnswerPost[] = [
  { id: 1, title: "Q & A 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 2, title: "Q & A 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 3, title: "Q & A 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 4, title: "Q & A 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"},
  { id: 5, title: "Q & A 제목_1", content: "content sample", created_date: "2022/11/17/18:00", updated_date: "2022/11/17/18:00", writer: "마한범"}  
];