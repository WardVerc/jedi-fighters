import { Fighter } from '@/models/Fighter';
import { useState } from 'react';

export default function usePagination(data: Fighter[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentPageData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function goToPage(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(Math.min(pageNumber, maxPage));
  }

  return {
    goToPage,
    currentPageData,
    currentPage,
    maxPage,
  };
}
