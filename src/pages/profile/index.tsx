import LeftNaviBar from '@/components/common/LeftNavBar';
import EditProfileForm from '@/components/userProfile/EditProfileForm';

export default function ProfilePage() {
  return (
    <>
      <LeftNaviBar />
      <div>
        <h2 className="text-kv-3xl font-kv-semibold">내 정보</h2>
        <EditProfileForm />
      </div>
    </>
  );
}
