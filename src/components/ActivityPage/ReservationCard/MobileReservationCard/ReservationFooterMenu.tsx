import Button from '@/components/common/Button';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface ReservationFooterMenuProps {
  onClick: CardEventHandlerType;
  people: number;
}

function ReservationFooterMenu({
  onClick,
  people,
}: ReservationFooterMenuProps) {
  return (
    <div className="fixed bottom-0 left-0 h-[83px] w-full border-[1px] border-kv-gray-300 bg-white">
      <div className="mx-4 flex h-full items-center justify-between">
        <div className="w-[121px]">
          <p>
            <span className={`font-kv-bold`}>₩ 1,000</span>
            <span className="text-kv-primary-blue">/</span>
            <span>{people}명</span>
          </p>
          <Button
            className="text-kv-primary-blue underline"
            type="button"
            onClick={onClick.handleModalToggle}
          >
            날짜 선택하기
          </Button>
        </div>
        <Button
          type="submit"
          className={`h-[48px] w-[106px] bg-kv-gray-600 text-kv-lg font-kv-bold text-white`}
          onClick={onClick.handleModalToggle}
        >
          예약하기
        </Button>
      </div>
    </div>
  );
}

export default ReservationFooterMenu;
