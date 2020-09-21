import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

const usePagination = ({total, itemsPerPage, action, opts}) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    const maxPage = Math.ceil(total / itemsPerPage);

    const begin = (page - 1) * itemsPerPage;

    useEffect(() => {
        dispatch(action({ ...opts, offset: begin, limit: itemsPerPage}));
    },[page])

    const handleChange = (event, value) => {
        setPage(value);
    };

    return { page, maxPage, handleChange };
};

export default usePagination;