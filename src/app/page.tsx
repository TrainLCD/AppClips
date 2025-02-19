import Image from "next/image";

export default function Home() {
	return (
		<div>
			<h1 className="text-2xl font-bold">
				配信開始まで今しばらくお待ちください
			</h1>
			<h2 className="text-xl font-bold">Coming soon...</h2>
			<Image src="/images/app-clip-qr.svg" alt="QR" width={512} height={512} />
			<p className="text-sm">現在上記のQRコードはご使用になれません</p>
			<p className="text-sm">Temporary QR code is not available.</p>
		</div>
	);
}
