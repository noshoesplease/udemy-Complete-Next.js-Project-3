import Header from '@/components/shared/Header';

const BaseLayout = props => {
  const { className, children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="container-fluid">
          {children}
        </div>
      </main>
    </div>
  )
}
export default BaseLayout;