export const translations = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About Us',
      contact: 'Contact Us',
      findUs: 'Find Us',
      book_now: 'Book Now', // Added
      inventory: 'Inventory', // Added
      my_bookings: 'My Bookings',
      login: 'Login', // Added
      register: 'Register', // Added
      logout: 'Logout', // Added
      adminDashboard: 'Admin Dashboard', // Added
      more: 'More', // Added
      signedInAs: 'Signed in as:' // Added
    },
    inventory: { // Added inventory section for public page
      title: 'Our Products',
      filter_category: 'Filter by Category:',
      all_categories: 'All Categories',
      sort_by: 'Sort by:',
      sort_default: 'Default',
      sort_price_asc: 'Price: Low to High',
      sort_price_desc: 'Price: High to Low',
      sort_name_asc: 'Name: A to Z',
      sort_name_desc: 'Name: Z to A',
      no_products_available: 'No products are currently available.',
      no_products_in_category: 'No products found in the "{{category}}" category.',
      quick_view_modal_title: 'Quick View',
      no_image: 'No Image Available',
      no_description: 'No description available.',
      errors: {
        load: 'Failed to load inventory. Please try again later.'
      }
    },
    home: {
      welcome: 'Welcome to Manos Barber Shop',
      subtitle: 'Where Style Meets Tradition'
    },
    about: { // Added About section
      title: 'About Manos',
      paragraph1: 'Manos is more than just a place to get a haircut; it\'s an experience rooted in tradition and dedicated to modern style. We believe in providing top-notch service in a welcoming atmosphere.',
      paragraph2: 'Our skilled barbers are passionate about their craft and committed to helping you look and feel your best. Come visit us and discover the Manos difference.'
    },
    contact: {
      title: 'Contact Us',
      hours: 'Salon Hours',
      phone: 'Phone',
      email: 'Email',
      form: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message'
      }
    },
    footer: {
      followUs: 'Follow Us',
      allRightsReserved: 'All Rights Reserved' // Added
    },
    booking: { // Added booking section for portal specific text
      pageTitle: 'Book Your Appointment',
      selectDateTimeTitle: 'Select Date & Time',
      selectDateLabel: 'Select Date:',
      availableSlotsTitle: 'Available Slots for {{date}}',
      selectedDateFallback: 'selected date',
      loadingSlots: 'Loading slots...',
      noSlots: 'No available slots found for this date.',
      enterDetailsTitle: 'Enter Your Details & Needs',
      backToTimeSelection: '← Back to Time Selection',
      bookingAtPrefix: 'Booking appointment at ',
      bookingAtSuffix: '.',
      bookingAs: 'Booking as: {{email}}',
      phoneLabel: 'Phone Number (Optional)',
      messageLabel: 'Message / Needs',
      messagePlaceholder: 'Please briefly describe the service or reason for your appointment.',
      confirmButton: 'Confirm Booking',
      bookingButtonLoading: 'Booking...',
      confirmationTitle: 'Booking Request Sent!',
      confirmationGreeting: 'Thank you, {{name}}!',
      confirmationMessagePrefix: 'Your appointment request for ',
      confirmationMessageSuffix: ' has been submitted.',
      reviewMessagePrompt: 'We will review your request and message:',
      confirmationEmailNotice: 'You should receive a confirmation email shortly (feature not implemented yet).',
      bookAnotherButton: 'Book Another Appointment',
      authenticating: 'Authenticating...',
      invalidStep: 'Invalid step',
      errorLoadAvailability: 'Could not load available times. Please try again later.',
      errorAuthRequired: 'You must be logged in to book an appointment.',
      errorSelectSlot: 'Please select a time slot.',
      errorEnterMessage: 'Please enter a message describing your needs.',
      errorUserNotAuthInternal: 'User is not authenticated.', // Internal error, might not need translation but good practice
      errorCreateBooking: 'Failed to create booking. Please try again.',
      authModal: {
        title: 'Login Required',
        message: 'You need to be logged in or registered to book an appointment.'
      },
      selectServiceTitle: 'Select Service',
      bookingSummary: 'Booking Summary',
      service: 'Service',
      dateTime: 'Date & Time',
      minutes: 'minutes',
      contactInformation: 'Contact Information',
      emailLabel: 'Email',
      phonePlaceholder: 'Enter your phone number',
      phoneError: 'Phone number is required',
      additionalInformation: 'Additional Information',
      optional: 'optional',
      characterLimit: '{{count}} characters remaining',
      termsNotice: 'By booking an appointment, you agree to our terms of service.',
      cancellationPolicy: 'Please note that cancellations must be made at least 24 hours before your appointment.',
      bookingDetails: 'Booking Details',
      yourMessage: 'Your Message',
      nextSteps: 'Next Steps',
      addToCalendarPrompt: 'Add this appointment to your calendar.',
      reminderNotice: "We'll send you a reminder 24 hours before your appointment.",
      needHelp: 'Need help?',
      contactSupport: 'Contact Support',
      selectStaffLabel: 'Select Staff (Optional)',
      anyStaff: 'Any Available Staff',
      errorLoadServices: 'Could not load services. Please try again later.',
      errorLoadStaff: 'Could not load staff members. Please try again later.',
      price: 'Price',
      duration: 'Duration',
      viewMyBookings: 'View My Bookings',
      backToServiceSelection: 'Back to Service Selection',
      noStaffAvailable: 'No staff members are currently available for this service.',

    },
    auth: { // Added auth section for Login/Register
      register: {
        title: 'Create your account',
        nameLabel: 'Full Name',
        namePlaceholder: 'Full Name',
        emailLabel: 'Email address',
        emailPlaceholder: 'Email address',
        phoneLabel: 'Phone Number (Optional)',
        phonePlaceholder: 'Phone Number (Optional)',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Password (min. 6 characters)',
        submitButton: 'Create account',
        loadingButton: 'Creating account...',
        alreadyHaveAccount: 'Already have an account?',
        signInLink: 'Sign in',
        successMessage: 'Registration successful! Please check your email to confirm your account.',
        errorUserIdNotFound: 'Registration successful but user ID not found.',
        errorProfileSave: 'Account created, but failed to save profile: {{message}}',
        errorGeneric: 'Failed to register.'
      },
      login: {
        title: 'Admin Login',
        emailLabel: 'Email address',
        emailPlaceholder: 'you@example.com',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Password',
        submitButton: 'Log in',
        loadingButton: 'Logging in...',
        errorUnknown: 'An unknown error occurred during login.'
        // Add specific error keys if needed, e.g., 'Invalid login credentials.'
      },
      customerLogin: { // Added for customer login page
        title: 'Sign in to your account',
        emailLabel: 'Email address',
        emailPlaceholder: 'Email address',
        passwordLabel: 'Password',
        passwordPlaceholder: 'Password',
        submitButton: 'Sign in',
        loadingButton: 'Signing in...',
        noAccount: "Don't have an account?",
        signUpLink: 'Sign up',
        errorGeneric: 'Failed to log in. Please check your credentials.'
        // Add specific error keys if needed
      }
    },
    my_bookings: { // Added My Bookings section
      title: 'My Bookings',
      no_bookings: 'You have no upcoming or past bookings.',
      unknown_service: 'Service Details Unavailable',
      labels: {
        time: 'Time',
        staff: 'With',
        status: 'Status'
      },
      errors: {
        not_logged_in: 'User not identified. Please log in to view your bookings.',
        load_failed: 'Failed to load your bookings.'
      }
    },
    common: { // Added common keys
      loading: 'Loading...',
      actions: 'Actions',
      not_applicable: 'N/A',
      edit: 'Edit',
      delete: 'Delete',
      loading_indicator: '...', // Added for dashboard counts
      error_indicator: 'Error',   // Added for dashboard counts
      previous: 'Previous', // Added for pagination
      next: 'Next',         // Added for pagination
      pagination: 'Page {{currentPage}} of {{totalPages}}', // Added for pagination
      cancel: 'Cancel',      // Added for modals
      view: 'View',          // Added for messages
      saving: 'Saving...',   // Added for settings save button
      save_settings: 'Save Settings', // Added for settings save button
      yes: 'Yes', // Added for boolean display
      no: 'No',   // Added for boolean display
      unknown: 'Unknown', // Added for boolean display
      days: { // Added for settings operating hours
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday'
      },
      step_progress: 'Step {{current}} of {{total}}', // Added for multi-step forms
      or: 'OR', // Added for image upload section
      refresh: 'Refresh'
    },
    admin: { // Added admin section
      bookings: {
        title: 'Manage Bookings',
        add_button: 'Add New Booking',
        no_bookings: 'No bookings found.',
        confirm_delete: 'Are you sure you want to delete this booking?',
        edit_modal_title: 'Edit Booking',
        add_modal_title: 'Add New Booking',
        table: {
          customer: 'Customer',
          message_needs: 'Message / Needs',
          start_time: 'Start Time',
          end_time: 'End Time',
          status: 'Status'
        },
        notifications: {
          add_success: 'Booking added successfully!',
          update_success: 'Booking updated successfully!',
          delete_success: 'Booking deleted successfully!'
        },
        errors: {
          fetch: 'Failed to fetch booking data.',
          delete: 'Failed to delete booking.'
        }
      },
      calendar: { // Added calendar section
        title: 'Booking Calendar',
        event: {
          default_service: 'Service',
          default_customer: 'Customer',
          default_staff: 'Staff'
        },
        errors: {
          fetch: 'Failed to fetch data for calendar.',
          parse_hours: 'Error parsing operating hours.', // Optional, but good to have
        },
        warnings: {
          settings_missing: 'Operating hours setting not found.' // Optional, but good to have
        }
      },
      customers: { // Added customers section
        title: 'Manage Customers',
        add_button: 'Add New Customer',
        no_customers: 'No customers found.',
        confirm_delete: 'Are you sure you want to delete this customer? This may also delete related bookings.',
        edit_modal_title: 'Edit Customer',
        add_modal_title: 'Add New Customer',
        table: {
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          joined: 'Joined'
        },
        notifications: {
          add_success: 'Customer added successfully!',
          update_success: 'Customer updated successfully!',
          delete_success: 'Customer deleted successfully!'
        },
        errors: {
          fetch: 'Failed to fetch customer data.',
          delete: 'Failed to delete customer.'
        }
      },
      dashboard: { // Added dashboard section
        title: 'Dashboard',
          card: {
            bookings_today: "Today's Bookings",
            upcoming_appointments_24h: 'Upcoming (24h)', // Added
            total_customers: 'Total Customers',
            new_messages: 'New Messages'
          },
          charts: { // Added charts subsection
          bookings_over_time: 'Bookings Over Time',
          bookings_trend: 'Bookings'
        },
        errors: {
          fetch: 'Failed to fetch summary data.'
        }
      },
      inventory: { // Added inventory section
        title: 'Inventory Management',
        add_button: 'Add New Product',
        search_placeholder: 'Search by name, brand, category...',
        no_products: 'No products found.',
        no_search_results: 'No products match your search.',
        edit_modal_title: 'Edit Product',
        add_modal_title: 'Add New Product',
        delete_modal_title: 'Confirm Deletion',
        confirm_delete: 'Are you sure you want to delete the product "{{name}}"? This action cannot be undone.',
        table: {
          name: 'Name',
          brand: 'Brand',
          category: 'Category',
          sale_price: 'Sale Price',
          quantity: 'Quantity',
          reorder_level: 'Reorder Level',
          currency: 'Currency', // Added
          original_price: 'Original Price', // Added
          discount: 'Discount (%)', // Added
          final_price: 'Final Sale Price:', // Added
          image_section_title: 'Product Image', // Added
          upload_image: 'Upload New Image', // Added
          upload_hint: 'Overrides the URL below if selected.', // Added
          image_url: 'Image URL' // Added
        },
        placeholders: { // Added placeholders subsection if missing, or add keys
          original_price: 'e.g., 19.99', // Added
          image_url: 'https://example.com/image.jpg' // Added
        },
        hints: { // Added hints subsection
          original_price: 'Regular price before discount. Leave blank if not on sale.'
        },
        alt: { // Added alt subsection
          preview: 'Preview'
        },
        buttons: {
          add: 'Add Product',
          update: 'Update Product',
          remove_image: 'Remove Image' // Added
        },
        notifications: {
          add_success: 'Product "{{name}}" added successfully!',
          update_success: 'Product "{{name}}" updated successfully!',
          delete_success: 'Product "{{name}}" deleted successfully!',
          uploading_image: 'Uploading image...', // Added
          image_removed_preview: 'Image preview cleared.', // Added
          old_image_deleted: 'Old image deleted successfully.', // Added
          upload_reverted: 'Image upload reverted due to save failure.' // Added
        },
        errors: {
          load: 'Failed to load products.',
          delete: 'Failed to delete product "{{name}}".',
          invalid_id: 'Cannot delete product: Invalid ID.',
          required_fields: 'Please fill in required fields (Name, Sale Price >= 0, Quantity >= 0).', // Keep existing or update if needed
          add: 'Failed to add product.',
          update: 'Failed to update product.',
          required_name: 'Product name is required.', // Added
          invalid_quantity: 'Quantity must be 0 or greater.', // Added
          invalid_discount: 'Discount percentage must be between 0 and 100.', // Added
          required_fields_final: 'Please ensure Name and Quantity are valid before saving.', // Added
          upload: 'Image upload failed.', // Added
          delete_old_image: 'Failed to delete the old image.', // Added
          revert_upload: 'Failed to delete the newly uploaded image after product save failed.' // Added
        },
        steps: { // Added steps subsection
          basic_info: 'Step 1: Basic Information',
          pricing_stock: 'Step 2: Pricing & Stock',
          image: 'Step 3: Product Image'
        }
      },
      services: { // Added services section
        title: 'Manage Services',
        add_button: 'Add Service',
        search_placeholder: 'Search services...',
        no_services: 'No services found.',
        no_search_results: 'No services match your search.',
        edit_modal_title: 'Edit Service',
        add_modal_title: 'Add Service',
        delete_modal_title: 'Confirm Deletion',
        confirm_delete: 'Are you sure you want to delete the service "{{name}}"? This action cannot be undone.',
        table: {
          name: 'Name',
          category: 'Category',
          duration: 'Duration (min)',
          price: 'Price',
          active: 'Active'
        },
        notifications: {
          // Add/Update success handled in form component
          delete_success: 'Service "{{name}}" deleted successfully!'
        },
        errors: {
          load: 'Failed to load services.',
          delete: 'Failed to delete service "{{name}}".',
          invalid_id: 'Cannot delete service: Invalid ID.'
        }
      },
      staff: { // Added staff section
        title: 'Manage Staff',
        add_button: 'Add Staff Member',
        search_placeholder: 'Search staff...',
        no_staff: 'No staff members found.',
        no_search_results: 'No staff members match your search.',
        edit_modal_title: 'Edit Staff Member',
        add_modal_title: 'Add Staff Member',
        delete_modal_title: 'Confirm Deletion',
        confirm_delete: 'Are you sure you want to delete {{name}}? This action cannot be undone.',
        table: {
          name: 'Name',
          phone: 'Phone',
          active: 'Active'
        },
        notifications: {
          // Add/Update success handled in form component
          delete_success: 'Staff member "{{name}}" deleted successfully!'
        },
        errors: {
          load: 'Failed to load staff members.',
          delete: 'Failed to delete staff member "{{name}}". They might be assigned to bookings.',
          invalid_id: 'Cannot delete staff member: Invalid ID.'
        }
      },
      messages: { // Added messages section
        title: 'Messages',
        no_messages: 'No messages found.',
        no_filtered_messages: 'No messages match the current filter.', // Added
        confirm_delete: 'Are you sure you want to delete this message?',
        deleting: 'Deleting message...',
        filter_by_status: 'Filter by status', // Added
        filter_options: { // Added
          all: 'All Statuses'
        },
        view_modal: {
          title: 'View Message'
        },
        table: {
          from: 'From',
          email: 'Email',
          phone: 'Phone', // Added
          snippet: 'Message Snippet',
          received: 'Received',
          status: 'Status',
          message: 'Message' // Added (for modal)
        },
        status: { // Message statuses
          unread: 'Unread',
          read: 'Read',
          archive: 'Archived'

        },
        actions: {
          mark_read: 'Mark Read',
          mark_unread: 'Mark Unread',
          archive: 'Archive' // Added
          // Add delete confirmation later if needed
        },
        notifications: {
          status_updated: 'Message status updated to {{status}}.',
          deleted: 'Message deleted successfully.', // Added
          bulk_updated: 'Selected messages have been updated successfully.'
        },
        errors: {
          fetch: 'Failed to fetch messages.',
          update_status: 'Failed to update message status.',
          delete: 'Failed to delete message.', // Added
          bulk_action: 'Failed to perform bulk action on messages.'
        },
        confirm_bulk_delete: 'Are you sure you want to delete the selected messages?',
        updating: 'Updating messages...'
      },
      settings: { // Added settings section
        title: 'Salon Settings',
        labels: {
          salon_name: 'Salon Name',
          phone: 'Phone Number',
          address: 'Address'
        },
        operating_hours: {
          title: 'Operating Hours',
          start_time: 'Start Time',
          end_time: 'End Time'
        },
        notifications: {
          update_success: 'Settings updated successfully!'
        },
        errors: {
          load: 'Failed to load settings.',
          parse_hours: 'Failed to parse operating hours setting. Using defaults.',
          stringify_hours: 'Failed to prepare operating hours for saving.',
          save: 'Failed to save settings.'
        }
      },
      forms: { // Added forms section
        booking: {
          labels: {
            customer: 'Customer',
            start_time: 'Start Time',
            end_time: 'End Time',
            status: 'Status',
            notes: 'Notes',
            message_needs: 'Message / Needs'
          },
          placeholders: {
            notes: 'Optional notes about the booking...',
            message_needs: 'Optional message from customer or admin notes...'
          },
          select_customer: 'Select Customer',
          status_options: {
            scheduled: 'Scheduled',
            completed: 'Completed',
            cancelled: 'Cancelled',
            no_show: 'No Show'
          },
          buttons: {
            add: 'Add Booking',
            update: 'Update Booking'
          },
          errors: {
            load_customers: 'Failed to load customer data for the form.',
            load_failed: 'Failed to load form data.', // Generic message for component display
            required_fields: 'Please fill in all required fields (Customer, Start Time, End Time).',
            invalid_datetime: 'Invalid start or end time format.',
            add: 'Failed to add booking.',
            update: 'Failed to update booking.'
          }
        },
        customer: { // Added customer form section
          labels: {
            name: 'Customer Name',
            email: 'Email Address',
            phone: 'Phone Number'
          },
          placeholders: {
            email: 'you@example.com',
            phone: 'e.g., 555-123-4567'
          },
          buttons: {
            add: 'Add Customer',
            update: 'Update Customer'
          },
          errors: {
            name_required: 'Customer name is required.',
            email_exists: 'A customer with this email already exists.',
            add: 'Failed to add customer.',
            update: 'Failed to update customer.'
          }
        },
        product: { // Added product form section
          labels: {
            name: 'Name',
            description: 'Description',
            brand: 'Brand',
            category: 'Category',
            purchase_price: 'Purchase Price ($)',
            sale_price: 'Sale Price ($)',
            quantity: 'Quantity on Hand',
            reorder_level: 'Reorder Level'
          },
          buttons: {
            add: 'Add Product',
            update: 'Update Product'
          },
          notifications: {
            add_success: 'Product "{{name}}" added successfully!',
            update_success: 'Product "{{name}}" updated successfully!'
          },
          errors: {
            required_fields: 'Please fill in required fields (Name, Sale Price >= 0, Quantity >= 0).',
            add: 'Failed to add product.',
            update: 'Failed to update product.'
          }
        },
        service: { // Added service form section
          labels: {
            name: 'Service Name',
            description: 'Description',
            duration: 'Duration (minutes)',
            price: 'Price',
            category: 'Category',
            active: 'Service is Active'
          },
          buttons: {
            add: 'Add Service',
            update: 'Update Service'
          },
          notifications: {
            add_success: 'Service "{{name}}" added successfully!',
            update_success: 'Service "{{name}}" updated successfully!'
          },
          errors: {
            required_fields: 'Please fill in all required fields (Name, Duration > 0, Price >= 0) with valid values.',
            add: 'Failed to add service.',
            update: 'Failed to update service.'
          }
        },
        staff: { // Added staff form section
          labels: {
            name: 'Name',
            phone: 'Phone',
            bio: 'Bio',
            active: 'Staff member is Active'
          },
          buttons: {
            add: 'Add Staff',
            update: 'Update Staff'
          },
          notifications: {
            add_success: 'Staff member "{{name}}" added successfully!',
            update_success: 'Staff member "{{name}}" updated successfully!'
          },
          errors: {
            name_required: 'Staff name is required.',
            add: 'Failed to add staff member.',
            update: 'Failed to update staff member.'
          }
        }
      },
      sidebar: { // Added sidebar section
        title: 'Salon Admin',
        dashboard: 'Dashboard',
        calendar: 'Calendar',
        bookings: 'Bookings',
        customers: 'Customers',
        inventory: 'Inventory',
        services: 'Services',
        staff: 'Staff', // Added staff key
        messages: 'Messages',
        settings: 'Settings'
      },
      header: { // Added header section
        home: 'Home',
        homeTooltip: 'Go to Public Homepage',
        logout: 'Logout',
        logoutTooltip: 'Log out from Admin Panel',
        newBooking: 'New Booking', // Added
        newCustomer: 'New Customer', // Added
        newBookingModalTitle: 'Add New Booking', // Added
        newCustomerModalTitle: 'Add New Customer' // Added
      }
      // Add other admin sections here later
    }
  },
  ar: {
    navigation: {
      home: 'الرئيسية',
      about: 'من نحن',
      contact: 'اتصل بنا',
      findUs: 'موقعنا',
      book_now: 'احجز الآن', // Added
      inventory: 'المخزن', // Added
      my_bookings: 'حجوزاتي',
      login: 'تسجيل الدخول', // Added
      register: 'تسجيل', // Added
      logout: 'تسجيل الخروج', // Added
      adminDashboard: 'لوحة تحكم المشرف', // Added
      more: 'المزيد', // Added
      signedInAs: 'تسجيل الدخول باسم:' // Added
    },
    inventory: { // Added inventory section for public page (Arabic)
      title: 'منتجاتنا',
      filter_category: 'تصفية حسب الفئة:',
      all_categories: 'جميع الفئات',
      sort_by: 'ترتيب حسب:',
      sort_default: 'افتراضي',
      sort_price_asc: 'السعر: من الأقل إلى الأعلى',
      sort_price_desc: 'السعر: من الأعلى إلى الأقل',
      sort_name_asc: 'الاسم: أ إلى ي',
      sort_name_desc: 'الاسم: ي إلى أ',
      no_products_available: 'لا توجد منتجات متاحة حالياً.',
      no_products_in_category: 'لم يتم العثور على منتجات في فئة "{{category}}".',
      quick_view_modal_title: 'نظرة سريعة',
      no_image: 'لا توجد صورة متاحة',
      no_description: 'لا يوجد وصف متاح.',
      errors: {
        load: 'فشل تحميل المخزون. يرجى المحاولة مرة أخرى لاحقاً.'
      }
    },
    home: {
      welcome: 'مرحباً بكم في صالون مانوس',
      subtitle: 'حيث يلتقي الأسلوب بالتقاليد'
    },
    about: { // Added About section (Arabic)
      title: 'عن مانوس',
      paragraph1: 'مانوس هو أكثر من مجرد مكان للحصول على قصة شعر؛ إنها تجربة متجذرة في التقاليد ومكرسة للأسلوب الحديث. نؤمن بتقديم خدمة عالية الجودة في جو ترحيبي.',
      paragraph2: 'حلاقونا الماهرون شغوفون بمهنتهم وملتزمون بمساعدتك على الظهور والشعور بأفضل حال. تعال لزيارتنا واكتشف الفرق في مانوس.'
    },
    contact: {
      title: 'اتصل بنا',
      hours: 'ساعات العمل',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      form: {
        name: 'الاسم',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الرسالة'
      }
    },
    footer: {
      followUs: 'تابعنا',
      allRightsReserved: 'جميع الحقوق محفوظة' // Added
    },
    booking: { // Added booking section for portal specific text (Arabic)
      pageTitle: 'احجز موعدك',
      selectDateTimeTitle: 'اختر التاريخ والوقت',
      selectDateLabel: 'اختر التاريخ:',
      availableSlotsTitle: 'الأوقات المتاحة لـ {{date}}',
      selectedDateFallback: 'التاريخ المحدد',
      loadingSlots: 'جار تحميل الأوقات...',
      noSlots: 'لا توجد أوقات متاحة لهذا التاريخ.',
      enterDetailsTitle: 'أدخل تفاصيلك واحتياجاتك',
      backToTimeSelection: '→ العودة لاختيار الوقت',
      bookingAtPrefix: 'حجز موعد في ',
      bookingAtSuffix: '.',
      bookingAs: 'الحجز باسم: {{email}}',
      phoneLabel: 'رقم الهاتف (اختياري)',
      messageLabel: 'الرسالة / الاحتياجات',
      messagePlaceholder: 'يرجى وصف الخدمة أو سبب الموعد بإيجاز.',
      confirmButton: 'تأكيد الحجز',
      bookingButtonLoading: 'جار الحجز...',
      confirmationTitle: 'تم إرسال طلب الحجز!',
      confirmationGreeting: 'شكراً لك، {{name}}!',
      confirmationMessagePrefix: 'تم تقديم طلب موعدك لـ ',
      confirmationMessageSuffix: '.',
      reviewMessagePrompt: 'سنراجع طلبك ورسالتك:',
      confirmationEmailNotice: 'ستتلقى رسالة تأكيد بالبريد الإلكتروني قريباً (الميزة غير مطبقة بعد).',
      bookAnotherButton: 'حجز موعد آخر',
      authenticating: 'جار المصادقة...',
      invalidStep: 'خطوة غير صالحة',
      errorLoadAvailability: 'تعذر تحميل الأوقات المتاحة. يرجى المحاولة مرة أخرى لاحقاً.',
      errorAuthRequired: 'يجب عليك تسجيل الدخول لحجز موعد.',
      errorSelectSlot: 'يرجى اختيار وقت.',
      errorEnterMessage: 'يرجى إدخال رسالة تصف احتياجاتك.',
      errorUserNotAuthInternal: 'المستخدم غير مصادق عليه.', // خطأ داخلي
      errorCreateBooking: 'فشل إنشاء الحجز. يرجى المحاولة مرة أخرى.',
      authModal: {
        title: 'تسجيل الدخول مطلوب',
        message: 'تحتاج إلى تسجيل الدخول أو التسجيل لحجز موعد.'
      },
      selectServiceTitle: 'اختر الخدمة',
      bookingSummary: 'ملخص الحجز',
      service: 'الخدمة',
      dateTime: 'التاريخ والوقت',
      minutes: 'دقائق',
      contactInformation: 'معلومات الاتصال',
      emailLabel: 'البريد الإلكتروني',
      phonePlaceholder: 'أدخل رقم هاتفك',
      phoneError: 'رقم الهاتف مطلوب',
      additionalInformation: 'معلومات إضافية',
      optional: 'اختياري',
      characterLimit: 'متبقي {{count}} حرف',
      termsNotice: 'بحجز موعد، أنت توافق على شروط الخدمة الخاصة بنا.',
      cancellationPolicy: 'يرجى ملاحظة أن الإلغاء يجب أن يتم قبل 24 ساعة على الأقل من موعدك.',
      bookingDetails: 'تفاصيل الحجز',
      yourMessage: 'رسالتك',
      nextSteps: 'الخطوات التالية',
      addToCalendarPrompt: 'أضف هذا الموعد إلى تقويمك.',
      reminderNotice: 'سنرسل لك تذكيراً قبل 24 ساعة من موعدك.',
      needHelp: 'تحتاج مساعدة؟',
      contactSupport: 'اتصل بالدعم',
      selectStaffLabel: 'اختر الموظف (اختياري)',
      anyStaff: 'أي موظف متاح',
      errorLoadServices: 'تعذر تحميل الخدمات. يرجى المحاولة مرة أخرى لاحقاً.',
      errorLoadStaff: 'تعذر تحميل قائمة الموظفين. يرجى المحاولة مرة أخرى لاحقاً.',
      price: 'السعر',
      duration: 'المدة',
      viewMyBookings: 'عرض حجوزاتي',
      backToServiceSelection: 'الرجوع إلى اختيار الخدمة',
      noStaffAvailable: 'لا يوجد حالياً موظفون متاحون لهذه الخدمة.',
    },
    auth: { // Added auth section for Login/Register (Arabic)
      register: {
        title: 'أنشئ حسابك',
        nameLabel: 'الاسم الكامل',
        namePlaceholder: 'الاسم الكامل',
        emailLabel: 'عنوان البريد الإلكتروني',
        emailPlaceholder: 'عنوان البريد الإلكتروني',
        phoneLabel: 'رقم الهاتف (اختياري)',
        phonePlaceholder: 'رقم الهاتف (اختياري)',
        passwordLabel: 'كلمة المرور',
        passwordPlaceholder: 'كلمة المرور (6 أحرف على الأقل)',
        submitButton: 'إنشاء حساب',
        loadingButton: 'جارٍ إنشاء الحساب...',
        alreadyHaveAccount: 'هل لديك حساب بالفعل؟',
        signInLink: 'تسجيل الدخول',
        successMessage: 'تم التسجيل بنجاح! يرجى التحقق من بريدك الإلكتروني لتأكيد حسابك.',
        errorUserIdNotFound: 'تم التسجيل بنجاح ولكن لم يتم العثور على معرف المستخدم.',
        errorProfileSave: 'تم إنشاء الحساب، ولكن فشل حفظ الملف الشخصي: {{message}}',
        errorGeneric: 'فشل التسجيل.'
      },
      login: {
        title: 'تسجيل دخول المشرف',
        emailLabel: 'عنوان البريد الإلكتروني',
        emailPlaceholder: 'you@example.com',
        passwordLabel: 'كلمة المرور',
        passwordPlaceholder: 'كلمة المرور',
        submitButton: 'تسجيل الدخول',
        loadingButton: 'جارٍ تسجيل الدخول...',
        errorUnknown: 'حدث خطأ غير معروف أثناء تسجيل الدخول.'
        // Add specific error keys if needed
      },
      customerLogin: { // Added for customer login page (Arabic)
        title: 'تسجيل الدخول إلى حسابك',
        emailLabel: 'عنوان البريد الإلكتروني',
        emailPlaceholder: 'عنوان البريد الإلكتروني',
        passwordLabel: 'كلمة المرور',
        passwordPlaceholder: 'كلمة المرور',
        submitButton: 'تسجيل الدخول',
        loadingButton: 'جارٍ تسجيل الدخول...',
        noAccount: 'ليس لديك حساب؟',
        signUpLink: 'إنشاء حساب',
        errorGeneric: 'فشل تسجيل الدخول. يرجى التحقق من بيانات الاعتماد الخاصة بك.'
        // Add specific error keys if needed
      }
    },
    my_bookings: { // Added My Bookings section
      title: 'حجوزاتي',
      no_bookings: 'ليس لديك حجوزات قادمة أو سابقة.',
      unknown_service: 'تفاصيل الخدمة غير متوفرة',
      labels: {
        time: 'الوقت',
        staff: 'مع',
        status: 'الحالة'
      },
      errors: {
        not_logged_in: 'لم يتم التعرف على المستخدم. يرجى تسجيل الدخول لعرض حجوزاتك.',
        load_failed: 'فشل تحميل حجوزاتك.'
      }
    },
    common: { // Added common keys
      loading: 'جار التحميل...',
      actions: 'الإجراءات',
      not_applicable: 'غير متاح',
      edit: 'تعديل',
      delete: 'حذف',
      loading_indicator: '...', // Added for dashboard counts
      error_indicator: 'خطأ',   // Added for dashboard counts
      previous: 'السابق', // Added for pagination
      next: 'التالي',         // Added for pagination
      pagination: 'صفحة {{currentPage}} من {{totalPages}}', // Added for pagination
      cancel: 'إلغاء',      // Added for modals
      view: 'عرض',          // Added for messages
      saving: 'جار الحفظ...',   // Added for settings save button
      save_settings: 'حفظ الإعدادات', // Added for settings save button
      yes: 'نعم', // Added for boolean display
      no: 'لا',   // Added for boolean display
      unknown: 'غير معروف', // Added for boolean display
      days: { // Added for settings operating hours
        monday: 'الاثنين',
        tuesday: 'الثلاثاء',
        wednesday: 'الأربعاء',
        thursday: 'الخميس',
        friday: 'الجمعة',
        saturday: 'السبت',
        sunday: 'الأحد'
      },
      step_progress: 'الخطوة {{current}} من {{total}}', // Added for multi-step forms
      or: 'أو', // Added for image upload section
      refresh: 'تحديث'
    },
    admin: { // Added admin section
      bookings: {
        title: 'إدارة الحجوزات',
        add_button: 'إضافة حجز جديد',
        no_bookings: 'لم يتم العثور على حجوزات.',
        confirm_delete: 'هل أنت متأكد أنك تريد حذف هذا الحجز؟',
        edit_modal_title: 'تعديل الحجز',
        add_modal_title: 'إضافة حجز جديد',
        table: {
          customer: 'العميل',
          message_needs: 'الرسالة / الاحتياجات',
          start_time: 'وقت البدء',
          end_time: 'وقت الانتهاء',
          status: 'الحالة'
        },
        notifications: {
          add_success: 'تمت إضافة الحجز بنجاح!',
          update_success: 'تم تحديث الحجز بنجاح!',
          delete_success: 'تم حذف الحجز بنجاح!'
        },
        errors: {
          fetch: 'فشل في جلب بيانات الحجز.',
          delete: 'فشل في حذف الحجز.'
        }
      },
      calendar: { // Added calendar section
        title: 'تقويم الحجوزات',
        event: {
          default_service: 'الخدمة',
          default_customer: 'العميل',
          default_staff: 'الموظف'
        },
        errors: {
          fetch: 'فشل في جلب بيانات التقويم.',
          parse_hours: 'خطأ في تحليل ساعات العمل.', // Optional, but good to have
        },
        warnings: {
          settings_missing: 'لم يتم العثور على إعداد ساعات العمل.' // Optional, but good to have
        }
      },
      customers: { // Added customers section
        title: 'إدارة العملاء',
        add_button: 'إضافة عميل جديد',
        no_customers: 'لم يتم العثور على عملاء.',
        confirm_delete: 'هل أنت متأكد أنك تريد حذف هذا العميل؟ قد يؤدي هذا أيضًا إلى حذف الحجوزات ذات الصلة.',
        edit_modal_title: 'تعديل العميل',
        add_modal_title: 'إضافة عميل جديد',
        table: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          phone: 'الهاتف',
          joined: 'تاريخ الانضمام'
        },
        notifications: {
          add_success: 'تمت إضافة العميل بنجاح!',
          update_success: 'تم تحديث العميل بنجاح!',
          delete_success: 'تم حذف العميل بنجاح!'
        },
        errors: {
          fetch: 'فشل في جلب بيانات العملاء.',
          delete: 'فشل في حذف العميل.'
        }
      },
      dashboard: { // Added dashboard section
        title: 'لوحة التحكم',
          card: {
            bookings_today: "حجوزات اليوم",
            upcoming_appointments_24h: 'المواعيد القادمة (24 ساعة)', // Added
            total_customers: 'إجمالي العملاء',
            new_messages: 'رسائل جديدة'
          },
          charts: { // Added charts subsection
          bookings_over_time: 'الحجوزات عبر الوقت',
          bookings_trend: 'الحجوزات'
        },
        errors: {
          fetch: 'فشل في جلب بيانات الملخص.'
        }
      },
      inventory: { // Added inventory section
        title: 'إدارة المخزن',
        add_button: 'إضافة منتج جديد',
        search_placeholder: 'البحث بالاسم، العلامة التجارية، الفئة...',
        no_products: 'لم يتم العثور على منتجات.',
        no_search_results: 'لا توجد منتجات تطابق بحثك.',
        edit_modal_title: 'تعديل المنتج',
        add_modal_title: 'إضافة منتج جديد',
        delete_modal_title: 'تأكيد الحذف',
        confirm_delete: 'هل أنت متأكد أنك تريد حذف المنتج "{{name}}؟ لا يمكن التراجع عن هذا الإجراء.',
        table: {
          name: 'الاسم',
          brand: 'العلامة التجارية',
          category: 'الفئة',
          sale_price: 'سعر البيع',
          quantity: 'الكمية',
          reorder_level: 'مستوى إعادة الطلب',
          currency: 'العملة', // Added
          original_price: 'السعر الأصلي', // Added
          discount: 'الخصم (%)', // Added
          final_price: 'السعر النهائي:', // Added
          image_section_title: 'صورة المنتج', // Added
          upload_image: 'رفع صورة جديدة', // Added
          upload_hint: 'سيحل محل الرابط أدناه إذا تم تحديده.', // Added
          image_url: 'رابط الصورة' // Added
        },
        placeholders: {
          original_price: 'مثال: 19.99', // Added
          image_url: 'https://example.com/image.jpg' // Added
        },
        hints: {
          original_price: 'السعر العادي قبل الخصم. اتركه فارغاً إذا لم يكن في تخفيض.'
        },
        alt: {
          preview: 'معاينة'
        },
        buttons: {
          add: 'إضافة منتج',
          update: 'تحديث المنتج',
          remove_image: 'إزالة الصورة' // Added
        },
        notifications: {
          // Add/Update success handled in form component? If not, add here.
          // add_success: 'تمت إضافة المنتج بنجاح!',
          // update_success: 'تم تحديث المنتج بنجاح!',
          delete_success: 'تم حذف المنتج "{{name}}" بنجاح!',
          uploading_image: 'جارٍ رفع الصورة...', // Added
          image_removed_preview: 'تم مسح معاينة الصورة.', // Added
          old_image_deleted: 'تم حذف الصورة القديمة بنجاح.', // Added
          upload_reverted: 'تم التراجع عن رفع الصورة بسبب فشل الحفظ' // Added
        },
        errors: {
          load: 'فشل في تحميل المنتجات.',
          delete: 'فشل في حذف المنتج "{{name}}".',
          invalid_id: 'لا يمكن حذف المنتج: معرف غير صالح.',
          required_fields: 'يرجى ملء الحقول المطلوبة (الاسم، سعر البيع >= 0، الكمية >= 0).',
          add: 'فشل في إضافة المنتج.',
          update: 'فشل في تحديث المنتج.',
          required_name: 'اسم المنتج مطلوب.', // Added
          invalid_quantity: 'يجب أن تكون الكمية 0 أو أكثر.', // Added
          invalid_discount: 'يجب أن تكون نسبة الخصم بين 0 و 100.', // Added
          required_fields_final: 'يرجى التأكد من صحة الاسم والكمية قبل الحفظ.', // Added
          upload: 'فشل رفع الصورة.', // Added
          delete_old_image: 'فشل حذف الصورة القديمة.', // Added
          revert_upload: 'فشل حذف الصورة المرفوعة حديثاً بعد فشل حفظ المنتج' // Added
        },
        steps: {
          basic_info: 'الخطوة 1: المعلومات الأساسية',
          pricing_stock: 'الخطوة 2: التسعير والمخزون',
          image: 'الخطوة 3: صورة المنتج'
        }
      },
      services: { // Added services section
        title: 'إدارة الخدمات',
        add_button: 'إضافة خدمة',
        search_placeholder: 'البحث في الخدمات...',
        no_services: 'لم يتم العثور على خدمات.',
        no_search_results: 'لا توجد خدمات تطابق بحثك.',
        edit_modal_title: 'تعديل الخدمة',
        add_modal_title: 'إضافة خدمة',
        delete_modal_title: 'تأكيد الحذف',
        confirm_delete: 'هل أنت متأكد أنك تريد حذف الخدمة "{{name}}؟ لا يمكن التراجع عن هذا الإجراء.',
        table: {
          name: 'الاسم',
          category: 'الفئة',
          duration: 'المدة (دقيقة)',
          price: 'السعر',
          active: 'نشط'
        },
        notifications: {
          // Add/Update success handled in form component
          delete_success: 'تم حذف الخدمة "{{name}}" بنجاح!'
        },
        errors: {
          load: 'فشل في تحميل الخدمات.',
          delete: 'فشل في حذف الخدمة "{{name}}".',
          invalid_id: 'لا يمكن حذف الخدمة: معرف غير صالح.'
        }
      },
      staff: { // Added staff section
        title: 'إدارة الموظفين',
        add_button: 'إضافة موظف',
        search_placeholder: 'البحث في الموظفين...',
        no_staff: 'لم يتم العثور على موظفين.',
        no_search_results: 'لا يوجد موظفون يطابقون بحثك.',
        edit_modal_title: 'تعديل الموظف',
        add_modal_title: 'إضافة موظف',
        delete_modal_title: 'تأكيد الحذف',
        confirm_delete: 'هل أنت متأكد أنك تريد حذف {{name}}؟ لا يمكن التراجع عن هذا الإجراء.',
        table: {
          name: 'الاسم',
          phone: 'الهاتف',
          active: 'نشط'
        },
        notifications: {
          // Add/Update success handled in form component
          delete_success: 'تم حذف الموظف "{{name}}" بنجاح!'
        },
        errors: {
          load: 'فشل في تحميل الموظفين.',
          delete: 'فشل في حذف الموظف "{{name}}". قد يكونون معينين لحجوزات.',
          invalid_id: 'لا يمكن حذف الموظف: معرف غير صالح.'
        }
      },
      messages: { // Added messages section
        title: 'الرسائل',
        no_messages: 'لم يتم العثور على رسائل.',
        no_filtered_messages: 'لا توجد رسائل تطابق الفلتر الحالي.', // Added
        confirm_delete: 'هل أنت متأكد أنك تريد حذف هذه الرسالة؟',
        deleting: 'جارٍ حذف الرسالة...',
        filter_by_status: 'تصفية حسب الحالة', // Added
        filter_options: { // Added
          all: 'جميع الحالات'
        },
        view_modal: {
          title: 'عرض الرسالة'
        },
        table: {
          from: 'من',
          email: 'البريد الإلكتروني',
          phone: 'الهاتف', // Added
          snippet: 'مقتطف الرسالة',
          received: 'تاريخ الاستلام',
          status: 'الحالة',
          message: 'الرسالة' // Added (for modal)
        },
        status: { // Message statuses
          unread: 'غير مقروءة',
          read: 'مقروءة',
          archive: 'مؤرشفة'
        },
        actions: {
          mark_read: 'وضع علامة كمقروءة',
          mark_unread: 'وضع علامة كغير مقروءة',
          archive: 'أرشفة' // Added
          // Add delete confirmation later if needed
        },
        notifications: {
          status_updated: 'تم تحديث حالة الرسالة إلى {{status}}.',
          deleted: 'تم حذف الرسالة بنجاح.', // Added
          bulk_updated: 'تم تحديث الرسائل المحددة بنجاح.'
        },
        errors: {
          fetch: 'فشل في جلب الرسائل.',
          update_status: 'فشل في تحديث حالة الرسالة.',
          delete: 'فشل حذف الرسالة.', // Added
          bulk_action: 'فشل في تنفيذ الإجراء الجماعي على الرسائل.'
        },
        confirm_bulk_delete: 'هل أنت متأكد أنك تريد حذف الرسائل المحددة؟',
        updating: 'جارٍ تحديث الرسائل...'
      },
      settings: { // Added settings section
        title: 'إعدادات الصالون',
        labels: {
          salon_name: 'اسم الصالون',
          phone: 'رقم الهاتف',
          address: 'العنوان'
        },
        operating_hours: {
          title: 'ساعات العمل',
          start_time: 'وقت البدء',
          end_time: 'وقت الانتهاء'
        },
        notifications: {
          update_success: 'تم تحديث الإعدادات بنجاح!'
        },
        errors: {
          load: 'فشل في تحميل الإعدادات.',
          parse_hours: 'فشل في تحليل إعداد ساعات العمل. يتم استخدام الإعدادات الافتراضية.',
          stringify_hours: 'فشل في تحضير ساعات العمل للحفظ.',
          save: 'فشل في حفظ الإعدادات.'
        }
      },
      forms: { // Added forms section
        booking: {
          labels: {
            customer: 'العميل',
            start_time: 'وقت البدء',
            end_time: 'وقت الانتهاء',
            status: 'الحالة',
            notes: 'ملاحظات',
            message_needs: 'الرسالة / الاحتياجات'
          },
          placeholders: {
            notes: 'ملاحظات اختيارية حول الحجز...',
            message_needs: 'رسالة اختيارية من العميل أو ملاحظات إدارية...'
          },
          select_customer: 'اختر العميل',
          status_options: {
            scheduled: 'مجدول',
            completed: 'مكتمل',
            cancelled: 'ملغى',
            no_show: 'لم يحضر'
          },
          buttons: {
            add: 'إضافة حجز',
            update: 'تحديث الحجز'
          },
          errors: {
            load_customers: 'فشل في تحميل بيانات العملاء للنموذج.',
            load_failed: 'فشل في تحميل بيانات النموذج.', // Generic message for component display
            required_fields: 'يرجى ملء جميع الحقول المطلوبة (العميل، وقت البدء، وقت الانتهاء).',
            invalid_datetime: 'تنسيق وقت البدء أو الانتهاء غير صالح.',
            add: 'فشل في إضافة الحجز.',
            update: 'فشل في تحديث الحجز.'
          }
        },
        customer: { // Added customer form section
          labels: {
            name: 'اسم العميل',
            email: 'عنوان البريد الإلكتروني',
            phone: 'رقم الهاتف'
          },
          placeholders: {
            email: 'you@example.com',
            phone: 'مثال: 555-123-4567'
          },
          buttons: {
            add: 'إضافة عميل',
            update: 'تحديث العميل'
          },
          errors: {
            name_required: 'اسم العميل مطلوب.',
            email_exists: 'يوجد عميل بهذا البريد الإلكتروني بالفعل.',
            add: 'فشل في إضافة العميل.',
            update: 'فشل في تحديث العميل.'
          }
        },
        product: { // Added product form section
          labels: {
            name: 'الاسم',
            description: 'الوصف',
            brand: 'العلامة التجارية',
            category: 'الفئة',
            purchase_price: 'سعر الشراء ($)',
            sale_price: 'سعر البيع ($)',
            quantity: 'الكمية المتوفرة',
            reorder_level: 'مستوى إعادة الطلب'
          },
          buttons: {
            add: 'إضافة منتج',
            update: 'تحديث المنتج'
          },
          notifications: {
            add_success: 'تمت إضافة المنتج "{{name}}" بنجاح!',
            update_success: 'تم تحديث المنتج "{{name}}" بنجاح!'
          },
          errors: {
            required_fields: 'يرجى ملء الحقول المطلوبة (الاسم، سعر البيع >= 0، الكمية >= 0).',
            add: 'فشل في إضافة المنتج.',
            update: 'فشل في تحديث المنتج.'
          }
        },
        service: { // Added service form section
          labels: {
            name: 'اسم الخدمة',
            description: 'الوصف',
            duration: 'المدة (دقيقة)',
            price: 'السعر',
            category: 'الفئة',
            active: 'الخدمة نشطة'
          },
          buttons: {
            add: 'إضافة خدمة',
            update: 'تحديث الخدمة'
          },
          notifications: {
            add_success: 'تمت إضافة الخدمة "{{name}}" بنجاح!',
            update_success: 'تم تحديث الخدمة "{{name}}" بنجاح!'
          },
          errors: {
            required_fields: 'يرجى ملء جميع الحقول المطلوبة (الاسم، المدة > 0، السعر >= 0) بقيم صالحة.',
            add: 'فشل في إضافة الخدمة.',
            update: 'فشل في تحديث الخدمة.'
          }
        },
        staff: { // Added staff form section
          labels: {
            name: 'الاسم',
            phone: 'الهاتف',
            bio: 'نبذة',
            active: 'الموظف نشط'
          },
          buttons: {
            add: 'إضافة موظف',
            update: 'تحديث الموظف'
          },
          notifications: {
            add_success: 'تمت إضافة الموظف "{{name}}" بنجاح!',
            update_success: 'تم تحديث الموظف "{{name}}" بنجاح!'
          },
          errors: {
            name_required: 'اسم الموظف مطلوب.',
            add: 'فشل في إضافة الموظف.',
            update: 'فشل في تحديث الموظف.'
          }
        }
      },
      sidebar: { // Added sidebar section
        title: 'إدارة الصالون',
        dashboard: 'لوحة التحكم',
        calendar: 'التقويم',
        bookings: 'الحجوزات',
        customers: 'العملاء',
        inventory: 'المخزن',
        services: 'الخدمات',
        staff: 'الموظفون', // Added staff key
        messages: 'الرسائل',
        settings: 'الإعدادات'
      },
      header: { // Added header section (Arabic)
        home: 'الرئيسية',
        homeTooltip: 'الذهاب إلى الصفحة الرئيسية العامة',
        logout: 'تسجيل الخروج',
        logoutTooltip: 'تسجيل الخروج من لوحة تحكم المشرف',
        newBooking: 'حجز جديد', // Added
        newCustomer: 'عميل جديد', // Added
        newBookingModalTitle: 'إضافة حجز جديد', // Added
        newCustomerModalTitle: 'إضافة عميل جديد' // Added
      }
      // Add other admin sections here later
    }
  }
};
