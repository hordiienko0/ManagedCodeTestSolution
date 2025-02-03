## Details of the Implementation

### 1. Components and Service
- **DataService**:  
  This service is provided at the `root` level. It contains methods to get, update, and reset the message.

- **ParentComponent**:
  - Uses the `Default` change detection strategy.
  - Shows how to update both simple (primitive) data and object data.
  - Has buttons to reset its own data and the service message.
  - Passes data to the ChildComponent.

- **ChildComponent**:
  - Uses the `OnPush` change detection strategy for better performance.
  - Updates its own data and shows the date in a human-readable format (using `unit.toLocaleString()`).
  - Also has buttons to update and reset its own data and the service message.

### 2. Change Detection Strategies
- **Default**:  
  This strategy checks all changes in the app. It is easy to use but might be slower in large apps.

- **OnPush**:  
  This strategy checks changes only when input properties change or when an update is triggered. This can improve performance for many components.

### 3. Hierarchical Dependency Injection
- The **DataService** is available to all components because it is provided at the `root` level. This means:
  - Data can be shared between components.
  - State management is centralized.
  - The app is easier to test and scale.

### 4. UI Demonstration
- The user interface (UI) has buttons to:
  - Update and reset simple (primitive) data.
  - Update and reset object data (by creating a new object reference for OnPush).
  - Update and reset the service message, showing the date in a readable format.
- The **ChildComponent** shows how the OnPush strategy works by updating only when its input data changes.