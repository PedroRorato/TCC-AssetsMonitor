/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ children }: PropsWithChildren) => {
	const navigate = useNavigate();
	// Check auth status

	const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) navigate('/login');
	}, [navigate, isLoggedIn]);

	return children;
};

export default ProtectedRoute;
