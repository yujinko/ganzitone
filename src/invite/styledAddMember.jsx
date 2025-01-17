import { styled } from "styled-components";

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: white;
  border: 1px solid #fafafa;
  min-height: 100vh; /* 화면 높이에 맞추어 크기 조절*/
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

// 뒤로가기 버튼
export const BanckBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 11%;
  width: 30px;
  top: 7%;
  height: 30px;
  flex-shrink: 0;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
`;

// 페이지 제목
export const PageTitle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  width: 100px;
  top: 7%;
  color: #312f34;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 85% */
  letter-spacing: -0.6px;
  text-align: center;
`;

// 프로필 이미지
export const DefaultProfile = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 18%;
  width: 127px;
  height: 127px;
  flex-shrink: 0;
  background-image: url("/images/DefaultProfile.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// 안내 문구
export const InfoText = styled.div`
  position: absolute;
  color: var(--kakao-logo, #000);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px; /* 175% */
  letter-spacing: -0.6px;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 33%;
  width: 330px;
  font-family: "Pretendard Variable";
`;

// 별명 입력 input
export const InputBox = styled.input`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 39%;
  width: 330px;
  height: 40px;
  color: black; /* 사용자가 입력하는 글자 색 */
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  border: none;
  border-bottom: 1px solid #b0b0b0;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: #9ea2b0; /* placeholder 색 */
  }

  &:focus {
    border-bottom: 2px solid #8f34ff; /* 포커스 시 색 변경 */
  }
`;

// 초대 버튼
export const InviteBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 45%;
  width: 327px;
  height: 51px;
  flex-shrink: 0;
  background-image: url("/images/InviteBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// 참가 버튼
export const JoinBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 53%;
  width: 327px;
  height: 51px;
  flex-shrink: 0;
  background-image: url("/images/JoinBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
