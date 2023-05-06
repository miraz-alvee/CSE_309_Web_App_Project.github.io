
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Admin Homepage</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="admin_homepage_style.css">
</head>

<body>
  <section class="full-section">
    
    <h1>Orders</h1>

    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Items</th>
            <th>price</th>
            <th>Contact No</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
        <?php
            include 'show_orders.php';    
            while($rows = $result->fetch_assoc()) {               
          ?>
          <tr>
            <td><?php echo $rows['id'];?></td>
            <td><?php echo $rows['items'];?></td>
            <td><?php echo $rows['price'];?></td>
            <td><?php echo $rows['mobile_no'];?></td>
            <td><?php echo $rows['place'];?></td>
            <td>
              <a class="btn btn-danger my-3" href="complete_order.php?id=<?php echo $rows['id']; ?>">
                Order Done
              </a>
            </td>
          </tr>
          <?php
                }
          ?>
        </tbody>
      </table>
    </div>
    
  </section>

</body>


</html>