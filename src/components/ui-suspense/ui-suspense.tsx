import { UiInitialLoading } from '@components/ui-initial-loading';
import { ReactNode, Suspense } from 'react';

const UiSuspense = ({ children }: { children: ReactNode }) => {
	return <Suspense fallback={<UiInitialLoading />}>{children}</Suspense>;
};

export { UiSuspense };
