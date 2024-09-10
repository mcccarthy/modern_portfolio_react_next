import { cn } from '@/lib/utils';

export default function Home() {
	return (
		<div>
			<h1 className={cn('font-oswald', 'text-3xl')}>
				Hello my name is James, wont you be my friend? Hello
			</h1>
			<h1 className={cn('text-3xl')}>Hello my name is James, wont you be my friend? Hello</h1>
		</div>
	);
}
