import { buttonVariants } from '@/components/ui/button';
import { db } from '@/server/db';
import Link from 'next/link';

export default async function Home() {
	const data = await db.query.test.findMany();
	return (
		<main className="bg-background flex min-h-screen items-center justify-center">
			<div className="max-w-[65rem]">
				<Link
					href="/method-1"
					className={buttonVariants({
						variant: 'link',
					})}
				>
					Method 1
				</Link>
				<Link
					href="/method-2"
					className={buttonVariants({
						variant: 'link',
					})}
				>
					Method 2
				</Link>
			</div>
		</main>
	);
}
