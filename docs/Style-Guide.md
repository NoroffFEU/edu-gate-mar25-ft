
# **Edugate Style Guide**

## **Branding Elements**

**1. Logo & Iconography**  
   - **Logo**: Edugate should have a logo that reflects academic themes (e.g., books, graduation cap, etc.) and conveys professionalism. It should be simple, modern, and scalable.
   - **Icons**: Use clean, minimalist icons for navigation, actions, and user roles (e.g., a book icon for results, a person icon for profile). Keep the icons monochrome to match the primary color palette and ensure they are easily recognizable.

**2. Brand Colors**  
   - **Primary Color**: #4CAF50 — Represents growth, education, and reliability.
   - **Secondary Color**: #2196F3 — Represents trustworthiness and professionalism.
   - **Accent Color**: #FF5722 — Use sparingly for notifications or alerts.
   - **Neutral Colors**: 
     - Light Gray: #F5F5F5 (background)
     - Dark Gray: #333333 (text)
     - Medium Gray: #757575 (secondary text and borders)

---

You're right! Let's add padding, margin, and indentation standards to ensure spacing consistency across components.

---

### **Spacing Guidelines (Padding & Margin)**

Edugate will follow an 8-point spacing system to maintain consistent spacing across all elements. Using multiples of 8px simplifies responsive design and ensures uniformity.

- **Base Unit**: 8px

#### **Spacing Scale**

| Scale Value | Spacing (px) | Usage Example                         |
|-------------|--------------|---------------------------------------|
| 0           | 0px          | No spacing                           |
| 1           | 8px          | Small padding/margin                 |
| 2           | 16px         | General padding/margin               |
| 3           | 24px         | Section dividers, card padding       |
| 4           | 32px         | Larger section separation            |
| 5           | 40px         | Layout padding, major section gaps   |
| 6           | 48px         | Page-level padding for structure     |

#### **Application of Spacing**
- **Small Padding (8px, 16px)**: Used for tight, internal spacing within buttons, inputs, and compact layouts.
- **Medium Padding (24px, 32px)**: Used for cards, sections within pages, and content within modals.
- **Large Padding (40px, 48px)**: Reserved for page layout containers, major section separations, and margins around large blocks of content.

---

## **Typography**

   - **Primary Font**: **Poppins** (for headings and buttons) — Choose bold and semi-bold weights to create a modern, readable look.
   - **Secondary Font**: **Roboto** (for body text) — Use regular and medium weights for contrast.
   - **Font Sizes**:
     - **Headings**: H1 - 32px, H2 - 24px, H3 - 20px
     - **Body Text**: 16px for paragraphs, 14px for labels and smaller text.
   - **Line Height**: 1.5 for improved readability.
   - **Letter Spacing**: 0.5px for headings to create a crisp, clean look.

---

## **Components**

1. **Navigation Bar**  
   - **Structure**: A sticky top bar with the logo on the left, followed by page links (Home, Results, Profile, etc.), and a profile dropdown on the right.
   - **Hover Effects**: Underline animation with the primary color on hover.
   - **Active State**: Bold text with a thicker underline in the primary color.

2. **Sidebar (Admin/Teacher)**
   - **Sections**: Home, Results Management, User Management, School Management, Settings, and Logout.
   - **Icons**: Each section should have a matching icon for visual clarity.
   - **Expand/Collapse**: Include an option to collapse the sidebar on smaller screens.

3. **Buttons**
   - **Primary Button**: 
     - Background: #4CAF50 (primary color)
     - Text: White (#FFFFFF)
     - Hover: Darker shade of primary (#388E3C)
     - Border Radius: 6px
     - Padding: 10px 20px
   - **Secondary Button**:
     - Outline style with secondary color border (#2196F3) and text
     - Hover: Light secondary color background (#BBDEFB)
   - **Alert Button** (for delete actions):
     - Background: Accent color (#FF5722)
     - Text: White
     - Hover: Darker shade of accent color (#E64A19)

4. **Cards**  
   - **Result Summary Card**: Displays subject, grade, and comments.
     - Background: White (#FFFFFF) with subtle shadow (0px 4px 8px rgba(0, 0, 0, 0.1))
     - Border Radius: 8px
     - Padding: 16px
   - **User Profile Card**: Shows user details and profile photo.
     - Border: Thin line with medium gray (#757575)
     - Profile Picture Placeholder: Circular frame with a light gray background (#E0E0E0)

5. **Table Design**  
   - **Headers**: Use primary color text and bold font for clarity.
   - **Rows**: Alternate light gray background (#F9F9F9) to improve readability.
   - **Hover Effect**: Slight background change on row hover to indicate interactivity.

6. **Forms**  
   - **Input Fields**:
     - Border: 1px solid light gray (#CCCCCC)
     - Focus: Border changes to primary color (#4CAF50)
     - Padding: 8px
   - **Labels**: Secondary text color (#757575), small font size, and bold.
   - **Validation Messages**: Error messages in accent color (#FF5722) below the field.

7. **Modals**  
   - **Structure**: Centered on the screen with a semi-transparent background overlay.
   - **Size**: 400-600px wide, depending on content.
   - **Actions**: Include primary and secondary buttons for confirmations and cancellations.

8. **Alerts & Notifications**  
   - **Success**: Green background (#E8F5E9), green text (#388E3C), with a check icon.
   - **Error**: Red background (#FFEBEE), red text (#C62828), with an exclamation icon.
   - **Warning**: Yellow background (#FFF3E0), yellow text (#FFA000), with a warning icon.

---

## **UI/UX Components**

1. **Header Section**:
   - Shows the page title, a brief description, and optional action buttons (e.g., “Add Result”).

2. **User Avatar Component**:
   - Used for displaying user photos in the profile, header, or navigation bar.
   - Placeholder initials if a photo is not available.

3. **Breadcrumbs**:
   - Helps users navigate back to previous pages (e.g., Home > Results > Add Results).
   - Text color: Medium Gray (#757575) with primary color on the current page.

4. **Pagination**:
   - Controls for tables, such as results or user lists, for better navigation across large datasets.
   - Style: Primary color for active pages, gray for inactive.

5. **Loading Spinners and Progress Bars**:
   - Show loading animations where there are delayed results or data fetching.
   - Spinner: Uses primary color for smooth, modern animation.
   - Progress Bar: Linear, in primary color with a light gray background.

---

## **Responsive Guidelines**

- **Mobile**: Stack elements vertically, use a collapsible sidebar, and prioritize key actions.
- **Tablet**: Keep sidebar visible if space allows; reduce padding on tables and cards.
- **Desktop**: Full layout with all elements visible.

---

This enhanced style guide should help ensure consistency across Edugate's design and keep the UI clean, modern, and functional. Let me know if you’d like more specifics or help building individual components!