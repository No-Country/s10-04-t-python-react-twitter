import TabNotifications from "../Components/notifications/tab-notifications";

export default function Notifications(): JSX.Element {
  return (
    <main className="flex justify-center w-full min-h-screen">
      <section className="w-full max-w-[598px]">
        <TabNotifications />
      </section>
    </main>
  );
}


