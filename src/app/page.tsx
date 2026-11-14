import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-4">
      {/* 프로필 카드 섹션 */}
      <section
        className="
          w-full p-[16px]
          md:w-[80%] md:max-w-[480px] md:p-6
          lg:w-[400px]
          bg-white rounded-[16px]
          shadow-[0_4px_12px_rgba(0,0,0,0.1)]
          flex flex-col items-center text-center
        "
        aria-label="프로필 카드"
      >
        {/* 프로필 이미지 */}
        <div className="relative w-[120px] h-[120px] mb-4">
          <Image
            src="/default-avatar.svg"
            alt="김서윤 프로필 이미지"
            width={120}
            height={120}
            priority
            className="w-[120px] h-[120px] rounded-full border-[3px] border-white shadow-md object-cover"
          />
        </div>

        {/* 이름 */}
        <h1 className="text-xl font-bold text-zinc-900 mb-2">
          김서윤
        </h1>

        {/* 한 줄 소개글 */}
        <p className="text-sm text-zinc-600 leading-relaxed break-keep">
          상명대학교 24학번 김서윤 :)
        </p>
      </section>
    </div>
  );
}
