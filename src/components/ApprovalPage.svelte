<script>
    import { showMessage } from '../messageStore.js';

    let users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
    ];

    const approveUser = (userId) => {
        showMessage('success', 'Запит було схвалено!');
        // to do: approve logic
    }

    const declineUser = (userId) => {
        showMessage('error', 'Запит було відхилено!');
        // to do: decline logic
    }
</script>

<style>
    .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 33px rgba(0,0,0,0.1);
        font-family: 'Exo 2', sans-serif;
    }

    .user-item {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        transition: background-color 0.3s;
    }

    .user-item:last-child {
        border-bottom: none;
    }

    .user-item:hover {
        background-color: #f9f9f9;
    }

    .button-container {
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }

    button {
        padding: 8px 16px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        transition: transform 0.2s, box-shadow 0.2s;
        margin-right: 10px;
    }

    button:last-child {
        margin-right: 0;
    }

    .approve-button {
        background-color: #00704a;
        color: white;
    }

    .decline-button {
        background-color: rgba(255, 0, 0, 0.72);
        color: white;
    }

    .approve-button:hover, .decline-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    h1 {
        text-align: center;
        color: #00704a;
        font-family: 'Exo 2', sans-serif;
    }

</style>

<div class="container">
    <h1>Запити на приєднання</h1>
    {#each users as user (user.id)}
        <div class="user-item">
            <p>{user.name} - {user.email}</p>
            <div class="button-container">
                <button class="approve-button" on:click={() => approveUser(user.id)}>Прийняти</button>
                <button class="decline-button" on:click={() => declineUser(user.id)}>Відхилити</button>
            </div>
        </div>
    {/each}
</div>