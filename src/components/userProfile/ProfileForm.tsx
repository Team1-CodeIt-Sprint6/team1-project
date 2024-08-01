export default function ProfileForm() {
  return (
    <form>
      <div>
        <label htmlFor="nickname">닉네임</label>
        <input id="nickname" />
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" />
      </div>
      <div>
        <label htmlFor="password-check">비밀번호 재입력</label>
        <input id="password-chek" type="password" />
      </div>
      <button>저장하기</button>
    </form>
  );
}
