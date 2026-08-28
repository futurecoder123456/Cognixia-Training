import styled from 'styled-components';

export const PageWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 24px;
  box-sizing: border-box;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 16px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
`;

export const Banner = styled.p`
  margin: 0 0 16px;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;

  &[data-variant='error'] {
    background: rgba(220, 38, 38, 0.1);
    border: 1px solid rgba(220, 38, 38, 0.4);
    color: #dc2626;
  }

  &[data-variant='success'] {
    background: rgba(22, 163, 74, 0.1);
    border: 1px solid rgba(22, 163, 74, 0.4);
    color: #16a34a;
  }
`;

export const TableWrapper = styled.div`
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border);
    font-size: 15px;
  }

  th {
    background: var(--code-bg);
    color: var(--text-h);
    font-weight: 600;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--accent-bg);
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  border: 1px solid rgba(220, 38, 38, 0.4);
  border-radius: 6px;
  background: transparent;
  color: #dc2626;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: rgba(220, 38, 38, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: var(--text);
  padding: 32px 0;
`;
