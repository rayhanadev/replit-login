import { lightfetch } from 'lightfetch-node';

const headers = {
	Referrer: 'https://replit.com',
	'X-Requested-With': 'XMLHttpRequest',
};

async function test(token: string): Promise<boolean> {
	const res = await lightfetch('https://replit.com/~', {
		method: 'GET',
		headers: {
			...headers,
			Cookie: 'connect.sid=' + token,
		},
	});

	return res.status === 200;
}

async function getCookie(): Promise<string> {
	const res = await lightfetch('https://replit.com/~', {
		method: 'GET',
		headers: {
			...headers,
		},
	});

	return res.cookies['connect.sid'].value;
}

interface EditorPreferences {
	isLayoutStacked: boolean;
	theme: string;
	indentIsSpaces: boolean;
	indentSize: number;
	keyboardHandler: string | boolean;
	primarySplitPosition: number;
	infiniteLoopProtection: boolean;
	hideFeaturedClassrooms: boolean;
	hideSuggestedClassrooms: boolean;
	codeIntelligence: boolean;
	fontSize: number;
	wrapping: boolean;
}

interface Icon {
	url: string | null;
	id: number | null;
}

interface Subscription {
	id: number;
	user_id: number;
	customer_id: string | null;
	plan_id: string | null;
	months: number | null;
	coupon: string | null;
	quantity: number | null;
	payment_method: string | null;
	purchase_order_state: string | null;
	stripe_status: string | null;
	voucher_id: string | null;
	notes: string | null;
	time_expired: string | null;
	time_updated: string | null;
	time_created: string | null;
	time_deleted: string | null;
}

interface Gate {
	controlName: string;
	type: string;
	value: boolean | string;
}

interface UserData {
	username: string;
	email: string;
	id: number;
	first_name: string | null;
	last_name: string | null;
	editor_preferences: EditorPreferences;
	time_created: string;
	email_notifications: boolean;
	icon: Icon | null;
	karma: number;
	emailHash: string;
	roles: string[] | null;
	connectedServices: string[] | null;
	subscription: Subscription;
	locale: string | null;
	customer_id: number | null;
	custom_theme_id: number | null;
	bio: string | null;
	is_verified: boolean;
	is_over_limit: boolean;
	is_team: boolean;
	signup_method: string | null;
	gating: Gate[];
	should_complete_profile: number;
	loginMethod: string;
	token: string;
}

interface UserError {
	message: string;
	name: string;
	states: number;
	token: null;
}

async function login(username: string, password: string, captcha: string) {
	const res = await lightfetch('https://replit.com/login', {
		method: 'POST',
		headers: {
			...headers,
			'User-Agent': 'Mozilla/5.0',
			Cookie: 'connect.sid=' + (await getCookie()),
		},
		body: {
			username,
			password,
			hCaptchaResponse: captcha,
			hCaptchaSiteKey: '473079ba-e99f-4e25-a635-e9b661c7dd3e',
			teacher: false,
		},
	});
	const info = await res.json();

	const data: UserData | UserError = {
		...info,
		token: res.status === 200 ? res.cookies['connect.sid'].value : null,
	};

	return data;
}

export { login, test };
