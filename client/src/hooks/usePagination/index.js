import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

const usePagination = ({total, itemsPerPage, action, opts}) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const begin = (page - 1) * itemsPerPage;
        dispatch(action({ ...opts, offset: begin, limit: itemsPerPage}));
    },[page])

    if(!total) return { maxPage, handleChange };

    const maxPage = Math.ceil(total / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return { maxPage, handleChange };
};

export default usePagination;