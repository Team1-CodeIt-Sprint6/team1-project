import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import LeftNavBar from '@/components/common/LeftNavBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const isAuthPage =
    router.pathname === '/signin' || router.pathname === '/signup';
  const needsSidebar = ![
    '/',
    '/experience-detail', //주소 이름 변경 필요
    '/signin',
    '/signup',
  ].includes(router.pathname);
  const isMainPage = router.pathname === '/';

  //로그인 정보, 유저 정보 받아오는 로직 필요
  const isLoggedIn = true;
  const currentUser = {
    id: 1,
    email: 'user@example.com',
    nickname: '김체리',
    profileImageUrl:
      'https://i.pinimg.com/564x/2e/79/91/2e79919eb6b27e2e994ccbf51cc4bf41.jpg',
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  };

  return (
    <div className="flex min-h-screen flex-col">
      {!isAuthPage && (
        <>
          <div className="fixed left-0 right-0 top-0 z-10">
            <Header isLoggedIn={isLoggedIn} user={currentUser} />
          </div>
          <div className="h-[70px] w-full" />
        </>
      )}

      {!isAuthPage && !isMainPage && (
        <>
          <div
            style={{
              height:
                'min(72px, calc(24px + (72 - 24) * ((100vw - 1200px) / (1920 - 1200))))',
              minHeight: '24px',
            }}
          />
          <div className="flex items-center justify-center">
            <div className="mx-5 flex w-full pc:w-[1200px] tablet:mx-6 tablet:w-full">
              {needsSidebar && (
                <div className="mr-4 hidden pc:block tablet:block">
                  <LeftNavBar />
                </div>
              )}
              <main className={`flex-1`}>{children}</main>
            </div>
          </div>
        </>
      )}

      {(isAuthPage || isMainPage) && (
        <main className={`flex-1`}>{children}</main>
      )}

      {!isAuthPage && (
        <>
          <div className="h-[120px]" />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
