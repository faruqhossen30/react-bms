 {/* Dashboard */}

 <Routes>
 <Route element={<AdminAuth />}>
   <Route path='admin/dashboard' element={<Dashboard />} />
   <Route path='admin/balance' element={<Balance />} />
   {/* Bet */}
   <Route path='admin/match-panel' element={<MatchPanel />} />
   <Route path='admin/match/create' element={<MatchCreate />} />
   <Route path='admin/match/edit/:id' element={<MatchEdit />} />
   {/* <Route path='admin/bet/:id/qusetion/create' element={<BetQuestionCreate />} /> */}
   <Route path='admin/match/:id/qusetion/create' element={<MatchQuestion />} />
   <Route path='admin/match-question/:id/edit' element={<MatchQuestionEdit />} />
   {/* User */}
   <Route path='admin/users' element={<UserList />} />
   <Route path='admin/user/:id' element={<UserDetails />} />
   <Route path='admin/user/edit/:id' element={<UserEdit />} />
   {/* Club */}
   <Route path='admin/clubs' element={<ClubList />} />
   <Route path='admin/club/create' element={<ClubCreate />} />
   <Route path='admin/club/edit/:id' element={<ClubEdit />} />

   <Route path='admin/deposits' element={<Deposit />} />
   <Route path='admin/deposit/:id' element={<DepositConfirm />} />
   <Route path='admin/widthdraws' element={<Widthdraw />} />
   <Route path='admin/flats' element={<Flag />} />
   <Route path='admin/games' element={<Game />} />
   {/* Settings */}
   <Route path='admin/settings' element={<Settings />} />
   <Route path='admin/setting/header-notice' element={<HeaderNotice />} />
   <Route path='admin/setting/footer-notice' element={<FooterNotice />} />
   <Route path='admin/setting/payment-gateway' element={<PaymentGateway />} />
   <Route path='admin/setting/widthdraw-limit' element={<WidthdrawLimit />} />
   <Route path='admin/setting/bet-limit' element={<BetLimit />} />
 </Route>
</Routes>