import Image from 'next/image';

export default function ImageLayout() {
  return (
    <>
      <div className="min-h-0">
        <Image
          src={'/images/image28.jpg'}
          alt="Banner image"
          width={6000}
          height={2}
        />
      </div>
    </>
  );
}
