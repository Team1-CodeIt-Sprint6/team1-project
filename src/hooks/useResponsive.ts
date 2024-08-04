import { useMediaQuery } from 'react-usehooks-ts';

function useResponsive() {
  const isMobile = useMediaQuery(767); // max-width: 767px
  const isTablet = useMediaQuery(1199) && !isMobile; // max-width: 1200px
  const isDesktop = !isMobile && !isTablet; // 1024px 이상

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}

export default useResponsive;
