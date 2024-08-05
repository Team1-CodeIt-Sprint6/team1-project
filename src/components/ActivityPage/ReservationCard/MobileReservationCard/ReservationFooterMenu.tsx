import PriceDisplay from '@/components/ActivityPage/ReservationCard/ReservationCommon/PriceDisplay';
import ReservationButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/ReservationButton';
import SelectDateTextButton from '@/components/ActivityPage/ReservationCard/ReservationCommon/SelectDateTextButton';
import { CardEventHandlerType } from '@/types/activityDetailPageTypes';

interface ReservationFooterMenuProps {
  onClick: CardEventHandlerType;
  people?: number;
}

function ReservationFooterMenu({ onClick }: ReservationFooterMenuProps) {
  return (
    <div className="fixed bottom-0 left-0 h-[83px] w-full border-[1px] border-kv-gray-300 bg-white">
      <div className="mx-4 flex h-full items-center justify-between">
        <div className="w-[121px]">
          <PriceDisplay
            price={1000}
            priceClassName="font-kv-bold text-kv-xl"
            containerClassName="min-w-[140px] pl-0 pt-0"
          />
          <SelectDateTextButton
            onClick={onClick.handleModalToggle}
            className="mt-0 underline"
          />
        </div>
        <ReservationButton className="h-[48px] w-[106px] bg-kv-gray-600 text-kv-lg font-kv-bold text-white" />
      </div>
    </div>
  );
}

export default ReservationFooterMenu;
