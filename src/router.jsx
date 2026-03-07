import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext({ path: '/', navigate: () => {} });

export const RouterProvider = ({ children }) => {
  const [path, setPath] = useState(() => window.location.pathname + window.location.hash);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname + window.location.hash);
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onPopState);
    };
  }, []);

  const navigate = (to, replace = false) => {
    if (replace) window.history.replaceState({}, '', to);
    else window.history.pushState({}, '', to);
    setPath(window.location.pathname + window.location.hash);
  };

  const value = useMemo(() => ({ path, navigate }), [path]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);

export const Link = ({ to, children, ...props }) => {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      {...props}
      onClick={(event) => {
        if (props.onClick) props.onClick(event);
        if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};
