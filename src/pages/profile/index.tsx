import LeftNaviBar from '@/components/common/LeftNavBar';
import EditProfile from '@/components/userProfile/EditProfile';

export default function ProfilePage() {
  return (
    <>
      <LeftNaviBar />
      <div>
        <h2 className="text-kv-3xl font-kv-semibold">내 정보</h2>
        <EditProfile />
      </div>
    </>
  );
}
