import TabNotifications from "../Components/notifications/tab-notifications";

const Notifications: React.FC = () => {
  return (
    <main className="flex justify-center w-full min-h-screen">
      <section className="w-full max-w-[598px]">
        <TabNotifications />
      </section>
    </main>
  );
};
export default Notifications;
