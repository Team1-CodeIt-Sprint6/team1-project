import ValueDropdown from '@/components/common/Dropdown/ValueDropdown';
import { MAX_IMG_LENGTH } from '@/constants/myActivityPage';
import useDropdown from '@/hooks/useDropdown';
import useImageManager from '@/hooks/useImageManager';
import { CATEGORIES } from '@/types/activityTypes';
import { IMAGE_TYPES } from '@/types/page/myActivityPageTypes';

export default function MyActivityForm() {
  const category = useDropdown('');
  const banner = useImageManager(MAX_IMG_LENGTH[IMAGE_TYPES.BANNER]);
  const sub = useImageManager(MAX_IMG_LENGTH[IMAGE_TYPES.SUB]);

  return (
    <form className="flex flex-col gap-6">
      <header className="flex items-center justify-between font-kv-bold">
        <h1 className="text-kv-3xl">내 체험 등록</h1>
        <button
          className="btn-blue h-12 w-[120px] rounded text-kv-lg"
          type="submit"
        >
          등록하기
        </button>
      </header>

      <input
        className="input-my-act"
        id="title"
        type="text"
        placeholder="제목"
      />

      <ValueDropdown
        placeholder={'카테고리'}
        availableValues={Object.values(CATEGORIES)}
        {...category}
      />

      <textarea
        className="input-my-act h-[346px] resize-none"
        id="description"
        placeholder="설명"
      />

      <div className="flex flex-col">
        <h2 className="h2-my-act">가격</h2>
        <input
          className="input-my-act"
          id="price"
          type="number"
          placeholder="가격"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="h2-my-act">주소</h2>
        <input
          className="input-my-act cursor-pointer"
          id="address"
          type="string"
          readOnly
          placeholder="주소를 입력해주세요."
        />
      </div>

      <div>
        <h2 className="h2-my-act">배너 이미지</h2>
        {banner.renderImageManager()}
      </div>

      <div>
        <h2 className="h2-my-act">소개 이미지</h2>
        {sub.renderImageManager()}
      </div>
      <p className="text-kv-2lg text-kv-gray-4b">
        *이미지는 최대 4개까지 등록 가능합니다.
      </p>
    </form>
  );
}
