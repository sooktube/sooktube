import {useState} from 'react';

export const usePagination = (itemsPerPage) => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    if (data == null) return { page, setData, currentData, maxPage, handleChange };
    const maxPage = Math.ceil(data.length / itemsPerPage);

    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    const currentData =  data.slice(begin, end);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return { page, setData, currentData, maxPage, handleChange };
};