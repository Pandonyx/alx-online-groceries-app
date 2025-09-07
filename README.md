# ALX Online Groceries App

A React Native grocery shopping app built with Expo and NativeWind (Tailwind CSS).

## 📱 Features

### Authentication Screens
- ✅ Splash Screen
- ✅ Onboarding Screen  
- ✅ Sign In Screen
- ✅ Number Input Screen
- ✅ Verification Screen
- ✅ Login Screen
- ✅ Sign Up Screen
- ✅ Select Location Screen

### Main App Screens
- ✅ Home Screen
- ✅ Product Detail Screen
- ✅ Explore Screen
- ✅ Beverages Screen
- ✅ Search Screen
- ✅ Filters Screen
- ✅ Cart Screen
- ✅ Favorites Screen
- ✅ Checkout Screen
- ✅ Order Accepted Screen
- ✅ Error Screen
- ✅ Account Screen

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd alx-online-groceries-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device/simulator**
   - Download Expo Go app on your phone
   - Scan the QR code from the terminal
   - Or press 'a' for Android emulator, 'i' for iOS simulator

## 🛠 Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **NativeWind** - Tailwind CSS for React Native
- **React Navigation** - Navigation library
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Yup** - Schema validation
- **Axios** - HTTP client
- **TypeScript** - Type safety

## 📁 Project Structure

```
src/
├── assets/              # Images, fonts, icons
├── components/          # Reusable UI components
│   ├── ui/              # Buttons, inputs, cards
│   ├── layout/          # Headers, footers
│   └── common/          # Loaders, modals
├── navigation/          # Navigation setup
├── screens/
│   ├── Auth/            # Authentication screens
│   ├── Main/            # Main app screens
│   └── Location/        # Location selection
├── store/               # Global state (Zustand)
├── services/            # API calls
├── constants/           # Theme, colors, sizes
└── utils/               # Helpers & validators
```

## 🎨 Design System

The app uses NativeWind (Tailwind CSS) for styling with a consistent design system:

- **Primary Color**: Green (#22C55E)
- **Typography**: System fonts with various weights
- **Spacing**: Consistent spacing scale (4, 8, 16, 24, 32, 48)
- **Border Radius**: Rounded corners (4, 8, 12, 16)

## 🔧 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web

## 📋 Next Steps

1. **Add Images**: Place your Figma assets in `src/assets/images/`
2. **Customize Colors**: Update `src/constants/theme.ts` with your brand colors
3. **API Integration**: Configure your backend API in `src/services/api.ts`
4. **Authentication**: Implement real authentication logic
5. **State Management**: Add cart, products, and user state
6. **Push Notifications**: Set up notifications for orders
7. **Testing**: Add unit and integration tests

## 📱 Screen Flow

```
Splash → Onboarding → Sign In → Number Input → Verification → Select Location → Home
                                    ↓
                              Login/Sign Up
```

## 🔄 Navigation Structure

- **AuthNavigator**: Handles authentication flow
- **MainNavigator**: Contains tab navigation and modal screens
- **TabNavigator**: Bottom tab navigation (Home, Explore, Cart, Favorites, Account)

## 📝 Development Tips

1. Use the provided TypeScript types for navigation
2. Follow the established folder structure
3. Use NativeWind classes for consistent styling
4. Implement proper error handling
5. Add loading states for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🚀**
