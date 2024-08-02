import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import LeftNavBar from '@/components/common/LeftNavBar';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const isAuthPage =
    router.pathname === '/signin' || router.pathname === '/signup';
  const isMainPage = router.pathname === '/';
  const isContentPage = /^\/experience-detail\/[^/]+$/.test(router.pathname);
  // const isContentPage = router.pathname === '/experience-detail';
  const isMyPages = !(isMainPage || isAuthPage || isContentPage);

  const shouldRenderHeader = !isAuthPage;
  const shouldRenderFooter = !isAuthPage;
  const shouldRenderPadding = !isAuthPage && !isMainPage;
  const shouldRenderSidebar = isMyPages;

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
      {shouldRenderHeader && (
        <>
          <div className="fixed left-0 right-0 top-0 z-10">
            <Header isLoggedIn={isLoggedIn} user={currentUser} />
          </div>
          <div className="h-[70px] w-full" />
        </>
      )}

      {shouldRenderPadding ? (
        <>
          <div
            style={{
              height:
                'min(72px, calc(24px + (72 - 24) * ((100vw - 1200px) / (1920 - 1200))))',
            }}
            className="min-h-6"
          />
          <div className="align-center">
            <div className="layout-content-container">
              {shouldRenderSidebar && (
                <div className="mr-4 hidden pc:block tablet:block">
                  <LeftNavBar />
                </div>
              )}
              <main className={`flex-1 bg-kv-gray-300`}>{children}</main>
            </div>
          </div>
        </>
      ) : (
        <main className={`flex-1`}>{children}</main>
      )}

      {shouldRenderFooter && (
        <>
          <div className="h-[120px]" />
          <Footer />
        </>
      )}
    </div>
  );
}

export default MainLayout;
