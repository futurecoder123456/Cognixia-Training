import styled from 'styled-components';

export const HomePageWrapper = styled.div`
	max-width: 1060px;
	margin: 0 auto;
	padding: 76px 32px 92px;
	text-align: left;

	h1 {
		margin: 10px 0 14px;
		max-width: 620px;
	}

	.lead {
		max-width: 480px;
		font-size: 1.15rem;
	}

	.balance-panel {
		display: grid;
		gap: 8px;
		max-width: 360px;
		margin-top: 54px;
		padding: 24px;
		color: #f8f6ef;
		background: #173f3a;
		border-radius: 8px;
		box-shadow: 12px 12px 0 #d9e5d7;
	}

	.balance-panel strong {
		font-size: 2rem;
		letter-spacing: 0;
	}

	.balance-note {
		color: #b8d4c2;
		font-size: 0.9rem;
	}

	.api-error {
		max-width: 480px;
		margin-top: 32px;
		padding: 14px 16px;
		color: #8c3d2b;
		background: #f8dfd6;
		border-left: 3px solid #c75b3d;
	}

	.customer-list {
		max-width: 620px;
		margin-top: 54px;

		h2 {
			margin: 0 0 14px;
			font-size: 1.4rem;
		}
	}

	.customer-row {
		display: flex;
		justify-content: space-between;
		gap: 20px;
		padding: 16px 0;
		border-bottom: 1px solid #dfe4dc;
	}

	@media (max-width: 640px) {
		.customer-row {
			align-items: flex-start;
			flex-direction: column;
			gap: 4px;
		}
	}

	@media (max-width: 640px) {
		padding: 52px 24px 68px;
	}
`;
