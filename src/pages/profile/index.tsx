import LeftNaviBar from '@/components/common/LeftNavBar';
import ProfileForm from '@/components/userProfile/ProfileForm';

export default function ProfilePage() {
  return (
    <>
      <LeftNaviBar />
      <div>
        <h2 className="text-kv-3xl font-kv-semibold">내 정보</h2>
        <ProfileForm />
      </div>
    </>
  );
}
